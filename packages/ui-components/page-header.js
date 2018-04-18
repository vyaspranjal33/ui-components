(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.PageHeader = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var headerStyle = {
    marginTop: 10,
};
var headingStyle = {
    color: '#294661',
    fontFamily: 'Colfax,Proxima Nova,Helvetica,sans-serif',
    fontWeight: 300,
};
var PageHeader = function (_a) {
    var children = _a.children;
    return (React.createElement("header", null, children));
};
var PageHeading = function (_a) {
    var children = _a.children, title = _a.title;
    return (React.createElement("div", { className: "content-header", style: headerStyle },
        React.createElement("h1", { style: headingStyle }, title),
        children && React.createElement("div", { className: "btn-list" }, children)));
};
PageHeading.defaultProps = {
    title: '',
};

exports.PageHeader = PageHeader;
exports.PageHeading = PageHeading;
exports.default = PageHeader;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=page-header.js.map
