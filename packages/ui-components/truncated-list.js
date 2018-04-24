import React from 'react';
export var TruncatedList = function (_a) {
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
export default TruncatedList;
//# sourceMappingURL=truncated-list.js.map