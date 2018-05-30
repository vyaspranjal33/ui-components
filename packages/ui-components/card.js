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
import cn from './utilities/classnames';
import Badge from './badge';
import Icon from './icon';
export var Card = function (_a) {
    var badge = _a.badge, body = _a.body, centered = _a.centered, children = _a.children, icon = _a.icon, iconSize = _a.iconSize, inline = _a.inline, thin = _a.thin, title = _a.title, className = _a.className, selected = _a.selected, attributes = __rest(_a, ["badge", "body", "centered", "children", "icon", "iconSize", "inline", "thin", "title", "className", "selected"]);
    return (React.createElement("div", __assign({ className: cn('card', className, {
            'is-centered': centered,
            'is-inline': inline,
            'is-selected': selected,
            'is-thin': thin,
        }) }, attributes),
        badge && React.createElement(Badge, __assign({}, badge)),
        icon &&
            React.createElement("div", { className: "card-icon" },
                React.createElement(Icon, { size: iconSize, type: icon })),
        title && React.createElement("h2", { className: cn({ 'card-title': inline }) }, title),
        body && React.createElement("p", null, body),
        children));
};
export default Card;
//# sourceMappingURL=card.js.map