(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.FragmentLoader = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var FragmentLoader = function () {
    return (React.createElement("svg", { className: "fragment-loader" },
        React.createElement("rect", { className: "fragment-square left", width: "10", height: "10" }),
        React.createElement("rect", { className: "fragment-square middle", width: "10", height: "10" }),
        React.createElement("rect", { className: "fragment-square right", width: "10", height: "10" })));
};

exports.FragmentLoader = FragmentLoader;
exports.default = FragmentLoader;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fragment-loader.js.map
