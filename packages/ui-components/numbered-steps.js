(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.NumberedSteps = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var NumberedStep = function (_a) {
    var children = _a.children, header = _a.header;
    return (React.createElement("li", null,
        React.createElement("h3", null, header),
        children));
};
var NumberedSteps = function (_a) {
    var children = _a.children;
    return (React.createElement("ol", { className: "numbered-steps" }, children));
};

exports.NumberedStep = NumberedStep;
exports.NumberedSteps = NumberedSteps;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=numbered-steps.js.map
