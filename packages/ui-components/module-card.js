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
import Card from './card';
import Icon from './icon';
import cn from './utilities/classnames';
var iconTypes = {
    button: 'button',
    code: 'code',
    columns: 'columns',
    divider: 'divider',
    image: 'images',
    'image-text': 'image-text',
    social: 'social',
    spacer: 'spacer',
    text: 'text',
    unsubscribe: 'unsubscribe',
};
var titles = {
    button: 'Button',
    code: 'Code',
    columns: 'Columns',
    divider: 'Divider',
    image: 'Image',
    'image-text': 'Image & Text',
    social: 'Social',
    spacer: 'Spacer',
    text: 'Text',
    unsubscribe: 'Unsubscribe',
};
export var ModuleCard = function (_a) {
    var type = _a.type, className = _a.className, attributes = __rest(_a, ["type", "className"]);
    return (React.createElement(Card, __assign({ centered: true, thin: true, className: cn('is-module', className) }, attributes),
        React.createElement("p", null,
            React.createElement(Icon, { type: iconTypes[type] }),
            titles[type])));
};
export default ModuleCard;
//# sourceMappingURL=module-card.js.map