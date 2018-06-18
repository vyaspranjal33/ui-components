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
import Actions, { Action } from '../actions';
import Card from '../card';
import Icon from '../icon';
import Styles from '../styles/card.module.scss';
export const UnsubscribeGroupCard = (_a) => {
    var { id, name, description, unsubscribes, isDisplayedOnPreferencesPage, onClickEdit: handleEdit, onClickPreview: handlePreview, onClickUploadCsv: handleUploadCsv, onClickExport: handleExport, onClickManuallyAdd: handleManualAdd } = _a, attributes = __rest(_a, ["id", "name", "description", "unsubscribes", "isDisplayedOnPreferencesPage", "onClickEdit", "onClickPreview", "onClickUploadCsv", "onClickExport", "onClickManuallyAdd"]);
    return (React.createElement(Card, Object.assign({ centered: true, title: name, body: description }, attributes),
        isDisplayedOnPreferencesPage && (React.createElement("p", { className: Styles['card-unsub-prefs'] },
            React.createElement(Icon, { type: "check-circle" }),
            "Included in opt out preferences")),
        React.createElement("p", { className: Styles['card-unsubs'] },
            React.createElement("strong", null, "Unsubscribes"),
            unsubscribes),
        React.createElement("p", { className: Styles['card-id'] },
            React.createElement("strong", null, "ID"),
            "\u00A0",
            id),
        React.createElement(Actions, { vertical: true },
            React.createElement(Action, { title: "Edit", icon: "pencil", onClick: handleEdit }),
            React.createElement(Action, { title: "Preview", icon: "view", onClick: handlePreview }),
            React.createElement(Action, { title: "Upload a CSV", icon: "export", onClick: handleUploadCsv }),
            React.createElement(Action, { title: "Export", icon: "download", onClick: handleExport }),
            React.createElement(Action, { title: "Manually Add", icon: "contacts-alt", onClick: handleManualAdd }))));
};
export { UnsubscribeGroupAddEdit } from './add-edit';
export { CreateNewGroupCard } from './create-new-group-card';
export default UnsubscribeGroupCard;
//# sourceMappingURL=index.js.map