(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.ButtonList = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var map = React.Children.map;
var ButtonList = function (_a) {
    var children = _a.children, onDark = _a.onDark;
    return (React.createElement("div", { className: "btn-list" }, map(children, function (button) {
        return button && React.cloneElement(button, { onDark: onDark });
    })));
};
ButtonList.defaultProps = {
    onDark: false,
};

exports.ButtonList = ButtonList;
exports.default = ButtonList;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=button-list.js.map
