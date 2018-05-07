import capitalize from 'lodash/capitalize';
import identity from 'lodash/identity';
import values from 'lodash/values';
import React, { PureComponent } from 'react';
import Button from './button';
import ButtonList from './button-list';
import Styles from './styles/filters.module.scss';
const filterControlStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};
const inlineClearButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '20px',
};
export class FilterableList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.handlers = {};
        this.handleFilterChange = (filterName, event) => {
            const value = event.target.value;
            this.setState({
                [filterName]: value,
            }, this.props.onChange);
        };
        this.handleClear = (event) => {
            if (this.props.onClear) {
                return this.props.onClear(event);
            }
            for (const key of Object.keys(this.state)) {
                this.setState({ [key]: '' });
            }
        };
        for (const name of props.filterTypes) {
            if (name) {
                this.state[name] = '';
                this.handlers[`handleFilter${capitalize(name)}Change`] = this.handleFilterChange.bind(this, name);
            }
            else {
                this.state.value = '';
                this.handlers[`handleFilterChange`] = this.handleFilterChange.bind(this, 'value');
            }
        }
    }
    static createClass(props) {
        return class FilterableListContainer extends PureComponent {
            render() {
                return React.createElement(FilterableList, Object.assign({}, props, { items: this.props.items }));
            }
        };
    }
    get filteredItems() {
        // If a function to filter items is passed in, then use that.
        const { onFilter, items } = this.props;
        if (onFilter) {
            return onFilter(items, this.state);
        }
        const filters = values(this.state)
            .join()
            .toLowerCase();
        const includesFilters = (value) => value
            .toString()
            .toLowerCase()
            .includes(filters);
        return items.filter((item) => {
            if (typeof item === 'string') {
                return includesFilters(item);
            }
            return values(item)
                .map(includesFilters)
                .some(identity);
        });
    }
    get clearButton() {
        return (React.createElement(ButtonList, { style: inlineClearButtonStyle },
            React.createElement(Button, { small: true, type: "secondary", onClick: this.handleClear }, this.props.clearButtonLabel)));
    }
    get showClearButtonInHeader() {
        return this.props.showClearButton && this.props.clearButtonInHeader;
    }
    get showClearButtonInline() {
        return this.props.showClearButton && !this.props.clearButtonInHeader;
    }
    render() {
        const { clearButtonLabel, title, showClearButton, renderControls, renderItems, } = this.props;
        return (React.createElement("section", { className: "FilterableList" },
            React.createElement("div", { className: Styles['filter-wrap'] },
                React.createElement("div", { className: Styles['filter-header'] },
                    React.createElement("p", { className: Styles['filter-title'] }, title),
                    this.showClearButtonInHeader && this.clearButton),
                React.createElement("div", { className: Styles['filter-list'], style: filterControlStyle },
                    renderControls(Object.assign({}, this.state, this.handlers), this.handleFilterChange),
                    this.showClearButtonInline && this.clearButton)),
            React.createElement("div", { className: "FilterableListItems" }, renderItems(this.filteredItems))));
    }
}
FilterableList.defaultProps = {
    clearButtonInHeader: false,
    clearButtonLabel: 'Clear',
    filterTypes: [''],
    showClearButton: false,
};
export default FilterableList;
//# sourceMappingURL=filterable-list.js.map