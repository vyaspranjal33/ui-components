var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { PureComponent } from 'react';
import { Button } from './button';
import { ButtonList } from './button-list';
import { Icon } from './icon';
import Styles from './styles/segment-term.module.scss';
import cn from './utilities/classnames';
export class SegmentTerm extends PureComponent {
    get termControls() {
        const _a = this.props, { editable, editing, onCancel, onConfirm, showConfirm } = _a, attributes = __rest(_a, ["editable", "editing", "onCancel", "onConfirm", "showConfirm"]);
        if (editing) {
            return (React.createElement(ButtonList, null,
                showConfirm && (React.createElement(Button, { type: "secondary", small: true, onClick: onConfirm },
                    React.createElement(Icon, { type: "check-thin" }))),
                onCancel && (React.createElement(Button, { type: "danger", small: true, onClick: onCancel },
                    React.createElement(Icon, { type: "x" })))));
        }
        if (editable) {
            return React.createElement(Icon, { type: "pencil", className: Styles['segment-term-edit'] });
        }
        return null;
    }
    render() {
        const _a = this.props, { hasAddButton, hasSeparator, editable, editing, label, onAddButtonClick, onEdit, queryName, radios, renderAlert, renderInputs, title, onCancel, onConfirm, showConfirm, className } = _a, attributes = __rest(_a, ["hasAddButton", "hasSeparator", "editable", "editing", "label", "onAddButtonClick", "onEdit", "queryName", "radios", "renderAlert", "renderInputs", "title", "onCancel", "onConfirm", "showConfirm", "className"]);
        return (React.createElement("div", Object.assign({ className: cn(Styles['segment-term-wrap'], className) }, attributes),
            React.createElement("p", { className: Styles['segment-term-title'] }, title),
            React.createElement("div", { className: cn(Styles['segment-term'], {
                    [Styles['has-alert']]: !!renderAlert,
                    [Styles['has-radios']]: radios,
                    [Styles['has-separator']]: hasSeparator,
                    [Styles['is-editable']]: editing,
                }), onClick: editable && !editing ? onEdit : undefined },
                editing && renderInputs && renderInputs(),
                !editing && (React.createElement("p", null,
                    `${label} `,
                    React.createElement("strong", null, queryName))),
                this.termControls,
                renderAlert && renderAlert()),
            hasAddButton && (React.createElement(ButtonList, null,
                React.createElement(Button, { type: "secondary", icon: "plus", onClick: onAddButtonClick }, "Add Condition")))));
    }
}
SegmentTerm.defaultProps = {
    editable: false,
    editing: false,
    hasAddButton: false,
    hasSeparator: false,
    radios: false,
};
//# sourceMappingURL=segment-term.js.map