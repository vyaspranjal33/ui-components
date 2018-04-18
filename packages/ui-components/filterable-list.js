var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import capitalize from 'lodash/capitalize';
import identity from 'lodash/identity';
import values from 'lodash/values';
import React, { PureComponent } from 'react';
import Button from './button';
import ButtonList from './button-list';
var filterControlStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};
var inlineClearButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '20px',
};
var FilterableList = /** @class */ (function (_super) {
    __extends(FilterableList, _super);
    function FilterableList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.handlers = {};
        _this.handleFilterChange = function (filterName, event) {
            var value = event.target.value;
            _this.setState((_a = {},
                _a[filterName] = value,
                _a), _this.props.onChange);
            var _a;
        };
        _this.handleClear = function (event) {
            if (_this.props.onClear) {
                return _this.props.onClear(event);
            }
            for (var _i = 0, _a = Object.keys(_this.state); _i < _a.length; _i++) {
                var key = _a[_i];
                _this.setState((_b = {}, _b[key] = '', _b));
            }
            var _b;
        };
        for (var _i = 0, _a = props.filterTypes; _i < _a.length; _i++) {
            var name_1 = _a[_i];
            if (name_1) {
                _this.state[name_1] = '';
                _this.handlers["handleFilter" + capitalize(name_1) + "Change"] = _this.handleFilterChange.bind(_this, name_1);
            }
            else {
                _this.state.value = '';
                _this.handlers["handleFilterChange"] = _this.handleFilterChange.bind(_this, 'value');
            }
        }
        return _this;
    }
    FilterableList.createClass = function (props) {
        return /** @class */ (function (_super) {
            __extends(FilterableListContainer, _super);
            function FilterableListContainer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FilterableListContainer.prototype.render = function () {
                return React.createElement(FilterableList, __assign({}, props, { items: this.props.items }));
            };
            return FilterableListContainer;
        }(PureComponent));
    };
    Object.defineProperty(FilterableList.prototype, "filteredItems", {
        get: function () {
            // If a function to filter items is passed in, then use that.
            var _a = this.props, onFilter = _a.onFilter, items = _a.items;
            if (onFilter) {
                return onFilter(items, this.state);
            }
            var filters = values(this.state)
                .join()
                .toLowerCase();
            var includesFilters = function (value) {
                return value
                    .toString()
                    .toLowerCase()
                    .includes(filters);
            };
            return items.filter(function (item) {
                if (typeof item === 'string') {
                    return includesFilters(item);
                }
                return values(item)
                    .map(includesFilters)
                    .some(identity);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterableList.prototype, "clearButton", {
        get: function () {
            return (React.createElement(ButtonList, { style: inlineClearButtonStyle },
                React.createElement(Button, { small: true, type: "secondary", onClick: this.handleClear }, this.props.clearButtonLabel)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterableList.prototype, "showClearButtonInHeader", {
        get: function () {
            return this.props.showClearButton && this.props.clearButtonInHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterableList.prototype, "showClearButtonInline", {
        get: function () {
            return this.props.showClearButton && !this.props.clearButtonInHeader;
        },
        enumerable: true,
        configurable: true
    });
    FilterableList.prototype.render = function () {
        var _a = this.props, clearButtonLabel = _a.clearButtonLabel, title = _a.title, showClearButton = _a.showClearButton, renderControls = _a.renderControls, renderItems = _a.renderItems;
        return (React.createElement("section", { className: "FilterableList" },
            React.createElement("div", { className: "filter-wrap" },
                React.createElement("div", { className: "filter-header" },
                    React.createElement("p", { className: "filter-title" }, title),
                    this.showClearButtonInHeader && this.clearButton),
                React.createElement("div", { className: "filter-list", style: filterControlStyle },
                    renderControls(__assign({}, this.state, this.handlers), this.handleFilterChange),
                    this.showClearButtonInline && this.clearButton)),
            React.createElement("div", { className: "FilterableListItems" }, renderItems(this.filteredItems))));
    };
    FilterableList.defaultProps = {
        clearButtonInHeader: false,
        clearButtonLabel: 'Clear',
        filterTypes: [''],
        showClearButton: false,
    };
    return FilterableList;
}(PureComponent));
export { FilterableList };
export default FilterableList;
//# sourceMappingURL=filterable-list.js.map