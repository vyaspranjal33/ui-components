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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import Badge from './badge';
import { Button } from './button';
import Icon from './icon';
import cn from './utilities/classnames';
var map = React.Children.map;
var DropdownButton = /** @class */ (function (_super) {
    __extends(DropdownButton, _super);
    function DropdownButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: false,
        };
        _this.handleClick = function () {
            var active = _this.state.active;
            _this.setState({ active: !active });
        };
        return _this;
    }
    DropdownButton.prototype.render = function () {
        var _a = this.props, active = _a.active, badge = _a.badge, children = _a.children, disabled = _a.disabled, gear = _a.gear, group = _a.group, icon = _a.icon, label = _a.label, loading = _a.loading, onClick = _a.onClick, onDark = _a.onDark, small = _a.small, type = _a.type, className = _a.className, attributes = __rest(_a, ["active", "badge", "children", "disabled", "gear", "group", "icon", "label", "loading", "onClick", "onDark", "small", "type", "className"]);
        var isActive = this.state.active;
        var hasBadge = !!badge || badge === 0;
        var hasIcon = !!icon;
        var buttonType = type;
        if (gear) {
            buttonType = 'secondary';
        }
        if (gear && icon) {
            buttonType = 'group-item';
        }
        var links = map(children, function (link) {
            return React.cloneElement(link, {
                className: link.props.className + " dropdown-link",
            });
        });
        return (React.createElement("div", { className: "btn-list" },
            React.createElement("div", __assign({ className: cn('btn', 'btn-dropdown', 'dropdown', "btn-" + buttonType, className, {
                    'btn-dropdown-gear': gear && !icon,
                    'btn-on-dark': onDark,
                    'btn-small': small,
                    'has-badge': hasBadge,
                    'has-icon': hasIcon || loading,
                    'is-active': isActive,
                    'is-disabled': disabled,
                    'is-loading': loading,
                }), onClick: this.handleClick }, attributes),
                !gear && hasBadge && React.createElement(Badge, null, badge),
                !gear && hasIcon && React.createElement(Icon, { type: icon, onDark: type === 'primary' }),
                gear ? React.createElement(Icon, { type: icon || 'gear' }) : label,
                React.createElement("ul", { className: "dropdown-menu" }, links))));
    };
    DropdownButton.defaultProps = Button.defaultProps;
    return DropdownButton;
}(React.Component));
export { DropdownButton };
export default DropdownButton;
//# sourceMappingURL=dropdown-button.js.map