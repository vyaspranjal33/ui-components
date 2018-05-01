(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Row = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var Row = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "row" }, children));
};

exports.Row = Row;
exports.default = Row;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=row.js.map
