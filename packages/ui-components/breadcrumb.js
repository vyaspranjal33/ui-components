(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Breadcrumb = {}),global.React));
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

var map = React.Children.map;
var mapper = function (children) { return (map(children, function (child, i) { return (child && React.createElement("li", { key: child.props.to || child.props.href },
    React.createElement(child.type, __assign({}, child.props)))); })); };
var Breadcrumb = function (_a) {
    var children = _a.children, withoutTrailingSlash = _a.withoutTrailingSlash;
    return (React.createElement("ol", { className: "breadcrumb" },
        mapper(children),
        !withoutTrailingSlash && React.createElement("li", null)));
};
Breadcrumb.defaultProps = {
    withoutTrailingSlash: false,
};

exports.Breadcrumb = Breadcrumb;
exports.default = Breadcrumb;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=breadcrumb.js.map
