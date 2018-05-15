var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
export var TruncatedList = function (_a) {
    var items = _a.items, _b = _a.limit, limit = _b === void 0 ? 3 : _b, className = _a.className, link = _a.link, renderItems = _a.renderItems, renderMore = _a.renderMore, attributes = __rest(_a, ["items", "limit", "className", "link", "renderItems", "renderMore"]);
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
    return (React.createElement("span", __assign({ className: className }, attributes),
        renderItems ? renderItems(shown) : shownText,
        renderMore && renderMore(numberOfAdditionalItems.toString(), link),
        !renderMore && hasAdditionalItems && additionalItemText));
};
export default TruncatedList;
//# sourceMappingURL=truncated-list.js.map