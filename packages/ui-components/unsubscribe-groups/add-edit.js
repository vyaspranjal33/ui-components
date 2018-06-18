var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Fragment } from 'react';
import Breadcrumb from '../breadcrumb';
import { Button } from '../button';
import { ButtonList } from '../button-list';
import { Card } from '../card';
import { Checkbox } from '../checkbox';
import { ConfirmationModal } from '../confirmation-modal';
import { Icon } from '../icon';
import { TextInput } from '../text-input';
import { Tooltip } from '../tooltip';
export const UnsubscribeGroupAddEdit = (_a) => {
    var { className, breadcrumbHref, groupDescription, groupName, id, isDeleteGroupModalOpen, isEdit, isGroupDisplayedOnIndex, onDeleteGroupModalClosed, onDeleteGroupModalOpened, onGroupDescriptionInputChanged, onGroupDisplayedOnIndexChanged, onGroupNameInputChanged, onDeleteUnsubscribeGroup, onSaveUnsubscribeGroup, unsubscribes } = _a, attributes = __rest(_a, ["className", "breadcrumbHref", "groupDescription", "groupName", "id", "isDeleteGroupModalOpen", "isEdit", "isGroupDisplayedOnIndex", "onDeleteGroupModalClosed", "onDeleteGroupModalOpened", "onGroupDescriptionInputChanged", "onGroupDisplayedOnIndexChanged", "onGroupNameInputChanged", "onDeleteUnsubscribeGroup", "onSaveUnsubscribeGroup", "unsubscribes"]);
    return (React.createElement("div", Object.assign({ id: "unsubcribe-groups" }, attributes),
        React.createElement("div", { className: "unsubcribe-group-add-edit-panel" },
            React.createElement("header", { className: "content-header" },
                React.createElement(Breadcrumb, null,
                    React.createElement("a", { href: breadcrumbHref }, "Unsubscribe Groups")),
                React.createElement("h1", null, isEdit ? 'Edit Group' : 'Add New Group')),
            React.createElement("p", { className: "small" },
                React.createElement("strong", null, "Unsubscribe groups allow recipients to opt out of different types of campaigns you send.")),
            isEdit && (React.createElement(Card, { inline: true, thin: true },
                React.createElement("span", { className: "small" },
                    React.createElement("strong", null, "Unsubscribes "),
                    unsubscribes),
                React.createElement("span", { className: "small" },
                    React.createElement("strong", null, "ID "),
                    id))),
            React.createElement(TextInput, { type: "text", label: "Group Name", id: "input-text-group-name", isRequired: true, value: groupName, onChange: onGroupNameInputChanged, info: "This will be displayed to your recipients when opting out." }),
            React.createElement(TextInput, { type: "text", label: "Group Description", id: "input-text-group-desc", isRequired: true, value: groupDescription, onChange: onGroupDescriptionInputChanged, info: "This will be displayed to your recipients when opting out." }),
            React.createElement("div", { className: "input-checkbox-wrap" },
                React.createElement(Checkbox, { checked: isGroupDisplayedOnIndex, id: "checkbox-display-unsubscribe-group", label: "Display this group on your unsubscribe preferences page.", onChange: onGroupDisplayedOnIndexChanged }),
                React.createElement(Tooltip, { className: "unsubscribe-group-index-display-tooltip", length: "large", content: `Clicking the Unsubscribe Preferences link will take
              recipients to a page that displays all unsubscribe groups
              you've chosen to include. You can preview this page at right
              by clicking the "Unsubscribe Preferences" tab` },
                    React.createElement(Icon, { type: "info-circle" }))),
            React.createElement(ButtonList, null,
                isEdit && (React.createElement(Button, { type: "danger", onClick: onDeleteGroupModalOpened }, "Delete Group")),
                React.createElement(Button, { type: "primary", onClick: onSaveUnsubscribeGroup }, "Save Unsubscribe Group"))),
        React.createElement(ConfirmationModal, { isOpen: isDeleteGroupModalOpen, renderActions: () => (React.createElement(Fragment, null,
                React.createElement(Button, { small: true, type: "secondary", onClick: onDeleteGroupModalClosed }, "Cancel"),
                React.createElement(Button, { small: true, type: "danger", onClick: onDeleteUnsubscribeGroup }, "Delete"))), renderBody: () => (React.createElement("p", { className: "small" }, "Warning: After deleting this group, recipients that unsubscribe from emails previously associated with this group will be globally unsubscribed because the group no longer exists.")), renderHeader: 'Are you sure you want to delete this unsubscribe group?' })));
};
export default UnsubscribeGroupAddEdit;
//# sourceMappingURL=add-edit.js.map