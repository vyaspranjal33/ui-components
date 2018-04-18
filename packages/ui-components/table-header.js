(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.TableHeader = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var TableHeader = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("thead", { className: className }, children));
};

exports.TableHeader = TableHeader;
exports.default = TableHeader;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table-header.js.map
