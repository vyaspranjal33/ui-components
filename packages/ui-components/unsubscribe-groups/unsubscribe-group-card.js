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
import Actions, { Action } from '../actions';
import Card from '../card';
import Icon from '../icon';
export var UnsubscribeGroupCard = function (_a) {
    var id = _a.id, name = _a.name, description = _a.description, unsubscribes = _a.unsubscribes, isDisplayedOnPreferencesPage = _a.isDisplayedOnPreferencesPage, handleEdit = _a.onClickEdit, handlePreview = _a.onClickPreview, handleUploadCsv = _a.onClickUploadCsv, handleExport = _a.onClickExport, handleManualAdd = _a.onClickManuallyAdd, attributes = __rest(_a, ["id", "name", "description", "unsubscribes", "isDisplayedOnPreferencesPage", "onClickEdit", "onClickPreview", "onClickUploadCsv", "onClickExport", "onClickManuallyAdd"]);
    return (React.createElement(Card, __assign({ centered: true, title: name, body: description }, attributes),
        isDisplayedOnPreferencesPage &&
            React.createElement("p", { className: "card-unsub-prefs" },
                React.createElement(Icon, { type: "check-circle" }),
                "Included in opt out preferences"),
        React.createElement("p", { className: "card-unsubs" },
            React.createElement("strong", null, "Unsubscribes"),
            unsubscribes),
        React.createElement("p", { className: "card-id" },
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
export default UnsubscribeGroupCard;
//# sourceMappingURL=unsubscribe-group-card.js.map