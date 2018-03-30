(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Button = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

function classNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = '';
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (!arg) {
            continue;
        }
        if (typeof arg === 'string' || typeof arg === 'number') {
            result = result + " " + arg;
            continue;
        }
        if (Array.isArray(arg)) {
            result = result + " " + classNames.apply(void 0, arg);
            continue;
        }
        if (typeof arg === 'object') {
            var keys = Object.keys(arg);
            for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
                var key = keys_1[_b];
                if (arg[key]) {
                    result = result + " " + key;
                }
            }
        }
    }
    return result.trim();
}

var Badge = function (_a) {
    var children = _a.children, color = _a.color, content = _a.content;
    return (React.createElement("span", { className: classNames('badge', color) }, children || content));
};
Badge.defaultProps = {
    children: 0,
    color: '',
};

var lightStyle = { color: 'white' };
var Icon = function (_a) {
    var type = _a.type, className = _a.className, handleClick = _a.onClick, onDark = _a.onDark;
    return (React.createElement("i", { className: classNames('sg-icon', "sg-icon-" + type, (_b = {}, _b[className] = !!className, _b)), onClick: handleClick, style: onDark ? lightStyle : null }));
    var _b;
};
Icon.defaultProps = {
    className: '',
    onDark: false,
};

var Loader = function (_a) {
    var onDark = _a.onDark, large = _a.large, small = _a.small, centered = _a.centered;
    var size = 10;
    if (large) {
        size *= 2;
    }
    if (small) {
        size /= 2;
    }
    return (React.createElement("svg", { className: classNames('sg-loader', {
            'is-centered': centered,
            'is-large': large,
            'is-small': small,
            'loader-on-dark': onDark,
        }) },
        React.createElement("rect", { className: "logo-square bottom-left", width: size, height: size }),
        React.createElement("rect", { className: "logo-square bottom-middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square top-middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square top-right", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle-left", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle-right", width: size, height: size })));
};
Loader.defaultProps = {
    centered: false,
    large: false,
    onDark: false,
    small: false,
};

var Button = function (props) {
    return (React.createElement(Buttonized, __assign({}, props),
        React.createElement("button", null, props.children)));
};
var Buttonized = function (_a) {
    var children = _a.children, type = _a.type, badge = _a.badge, disabled = _a.disabled, loading = _a.loading, small = _a.small, onDark = _a.onDark, onClick = _a.onClick, group = _a.group, active = _a.active, icon = _a.icon, id = _a.id;
    var hasBadge = !!badge || badge === 0;
    var hasIcon = !!icon;
    var content = [];
    if (hasBadge) {
        content.push(React.createElement(Badge, { key: 1 }, badge));
    }
    if (hasIcon) {
        content.push(React.createElement(Icon, { key: 2, type: icon }));
    }
    if (loading) {
        content.push(React.createElement(Loader, { key: 3, small: true, onDark: type === 'primary' }));
    }
    // the children of the element being buttonized
    if (children.props.children) {
        content.push(children.props.children);
    }
    return (React.cloneElement(children, {
        className: classNames('btn', "btn-" + type, {
            'btn-on-dark': onDark,
            'btn-small': small,
            'has-badge': hasBadge,
            'has-icon': hasIcon || loading,
            'is-active': active,
            'is-disabled': disabled,
            'is-loading': loading,
        }),
        id: id,
        onClick: onClick,
    }, content));
};
Button.defaultProps = {
    active: false,
    badge: null,
    children: '',
    disabled: false,
    group: false,
    icon: null,
    loading: false,
    onClick: function () { },
    onDark: false,
    small: false,
    type: 'primary',
};

exports.Button = Button;
exports.Buttonized = Buttonized;
exports.default = Button;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=button.js.map
