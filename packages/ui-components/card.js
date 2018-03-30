(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Card = {}),global.React));
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

var Card = function (_a) {
    var badge = _a.badge, body = _a.body, centered = _a.centered, children = _a.children, inline = _a.inline, thin = _a.thin, title = _a.title;
    var titleStyle = {
        width: '100%',
    };
    return (React.createElement("div", { className: classNames('card', {
            'is-centered': centered,
            'is-thin': thin,
        }) },
        badge && React.createElement(Badge, __assign({}, badge)),
        title && React.createElement("h2", { style: titleStyle }, title),
        body && React.createElement("p", null, body),
        children));
};

exports.Card = Card;
exports.default = Card;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=card.js.map
