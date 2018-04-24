(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global['table-cell'] = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var TableCell = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("td", { className: className }, children));
};

exports.TableCell = TableCell;
exports.default = TableCell;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table-cell.js.map
