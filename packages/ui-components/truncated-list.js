(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.TruncatedList = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

var TruncatedList = function (_a) {
    var items = _a.items, _b = _a.limit, limit = _b === void 0 ? 3 : _b, className = _a.className, link = _a.link, renderItems = _a.renderItems, renderMore = _a.renderMore;
    var shown = items.slice(0, limit);
    var shownText = shown.join(', ');
    var truncated = items.slice(limit);
    var numberOfAdditionalItems = truncated.length;
    var hasAdditionalItems = numberOfAdditionalItems > 0;
    var additionalItemText = (React.createElement("span", null,
        ",",
        ' ',
        React.createElement("abbr", null,
            React.createElement("a", { href: link },
                "+",
                numberOfAdditionalItems,
                " more"))));
    return (React.createElement("span", { className: className },
        renderItems ? renderItems(shown) : shownText,
        renderMore && renderMore(numberOfAdditionalItems.toString(), link),
        !renderMore && hasAdditionalItems && additionalItemText));
};

exports.TruncatedList = TruncatedList;
exports.default = TruncatedList;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=truncated-list.js.map
