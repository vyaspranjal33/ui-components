(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.TableBody = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var TableBody = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("tbody", { className: className }, children));
};

exports.TableBody = TableBody;
exports.default = TableBody;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table-body.js.map
