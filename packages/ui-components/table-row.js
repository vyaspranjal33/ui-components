(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.TableRow = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var TableRow = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("tr", { className: className }, children));
};

exports.TableRow = TableRow;
exports.default = TableRow;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table-row.js.map
