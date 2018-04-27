import React from 'react';
import cn from './utilities/classnames';
import findActiveIndex from './utilities/find-active-index';
const { map } = React.Children;
export const Tab = ({ active, children, onClick: handleClick, number, }) => {
    return (React.createElement("li", { className: cn('tab', {
            'is-active': active,
        }), onClick: handleClick },
        children,
        " ",
        number && React.createElement("span", { className: "tab-number" }, number)));
};
Tab.defaultProps = {
    active: false,
};
export const Tabs = ({ centered, children, zeroBorder, onChange, }) => {
    return (React.createElement("ul", { className: cn('tab-wrapper', {
            'is-centered': centered,
            'zero-border': zeroBorder,
        }) }, map(children, (tab, index) => {
        return React.cloneElement(tab, {
            onClick(event) {
                const { children: label, onClick } = tab.props;
                onClick(event);
                onChange(event, label, index);
            },
        });
    })));
};
export class StatefulTabs extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeIndex: findActiveIndex(this.props.children),
        };
        this.handleChange = (event, label, index) => {
            const { onChange: handleChange } = this.props;
            this.setState({
                activeIndex: index,
            }, () => {
                handleChange(event, label, index);
            });
        };
    }
    render() {
        const { activeIndex } = this.state;
        const tabs = map(this.props.children, (tab, index) => {
            return React.cloneElement(tab, {
                active: index === activeIndex,
            });
        });
        return (React.createElement(Tabs, Object.assign({}, this.props, { onChange: this.handleChange }), tabs));
    }
}
export default Tabs;
//# sourceMappingURL=tabs.js.map