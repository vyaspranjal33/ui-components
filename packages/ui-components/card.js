var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import Badge from './badge';
import cn from './utilities/classnames';
export var Card = function (_a) {
    var badge = _a.badge, body = _a.body, centered = _a.centered, children = _a.children, inline = _a.inline, thin = _a.thin, title = _a.title;
    var titleStyle = {
        width: '100%',
    };
    return (React.createElement("div", { className: cn('card', {
            'is-centered': centered,
            'is-thin': thin,
        }) },
        badge && React.createElement(Badge, __assign({}, badge)),
        title && React.createElement("h2", { style: titleStyle }, title),
        body && React.createElement("p", null, body),
        children));
};
export default Card;
//# sourceMappingURL=card.js.map