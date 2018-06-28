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
export const CreateNewGroupCard = (_a) => {
    var { className, disabled, onClickCreate: handleCreate } = _a, attributes = __rest(_a, ["className", "disabled", "onClickCreate"]);
    return (React.createElement(Card, Object.assign({ centered: true, title: "Create New Group", body: "Create a new group that represents a common type of email you send.", className: className }, attributes),
        React.createElement(Button, { type: "primary", onClick: handleCreate, disabled: disabled }, "Create New Group")));
};
export default CreateNewGroupCard;
//# sourceMappingURL=create-new-group-card.js.map