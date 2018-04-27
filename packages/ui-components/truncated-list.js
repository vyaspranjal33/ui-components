import React from 'react';
export const TruncatedList = ({ items, limit = 3, className, link, renderItems, renderMore, }) => {
    const shown = items.slice(0, limit);
    const shownText = shown.join(', ');
    const truncated = items.slice(limit);
    const numberOfAdditionalItems = truncated.length;
    const hasAdditionalItems = numberOfAdditionalItems > 0;
    const additionalItemText = (React.createElement("span", null,
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