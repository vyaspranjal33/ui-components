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
import Button from '../button';
import Card from '../card';
export var CreateNewGroupCard = function (_a) {
    var className = _a.className, handleCreate = _a.onClickCreate, attributes = __rest(_a, ["className", "onClickCreate"]);
    return (React.createElement(Card, __assign({ centered: true, title: "Create New Group", body: "Create a new group that represents a common type of email you send.", className: className }, attributes),
        React.createElement(Button, { type: "primary", onClick: handleCreate }, "Create New Group")));
};
export default CreateNewGroupCard;
//# sourceMappingURL=create-new-group-card.js.map