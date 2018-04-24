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
import React from 'react';
import cn from './utilities/classnames';
import findActiveIndex from './utilities/find-active-index';
var map = React.Children.map;
export var Tab = function (_a) {
    var active = _a.active, children = _a.children, handleClick = _a.onClick, number = _a.number;
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
export var Tabs = function (_a) {
    var centered = _a.centered, children = _a.children, zeroBorder = _a.zeroBorder, onChange = _a.onChange;
    return (React.createElement("ul", { className: cn('tab-wrapper', {
            'is-centered': centered,
            'zero-border': zeroBorder,
        }) }, map(children, function (tab, index) {
        return React.cloneElement(tab, {
            onClick: function (event) {
                var _a = tab.props, label = _a.children, onClick = _a.onClick;
                onClick(event);
                onChange(event, label, index);
            },
        });
    })));
};
var StatefulTabs = /** @class */ (function (_super) {
    __extends(StatefulTabs, _super);
    function StatefulTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: findActiveIndex(_this.props.children),
        };
        _this.handleChange = function (event, label, index) {
            var handleChange = _this.props.onChange;
            _this.setState({
                activeIndex: index,
            }, function () {
                handleChange(event, label, index);
            });
        };
        return _this;
    }
    StatefulTabs.prototype.render = function () {
        var activeIndex = this.state.activeIndex;
        var tabs = map(this.props.children, function (tab, index) {
            return React.cloneElement(tab, {
                active: index === activeIndex,
            });
        });
        return (React.createElement(Tabs, __assign({}, this.props, { onChange: this.handleChange }), tabs));
    };
    return StatefulTabs;
}(React.Component));
export { StatefulTabs };
export default Tabs;
//# sourceMappingURL=tabs.js.map