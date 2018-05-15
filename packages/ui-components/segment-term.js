var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React, { PureComponent } from 'react';
import { Button } from './button';
import { ButtonList } from './button-list';
import { Icon } from './icon';
import cn from './utilities/classnames';
var SegmentTerm = /** @class */ (function (_super) {
    __extends(SegmentTerm, _super);
    function SegmentTerm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SegmentTerm.prototype, "termControls", {
        get: function () {
            var _a = this.props, editable = _a.editable, editing = _a.editing, onCancel = _a.onCancel, onConfirm = _a.onConfirm, showConfirm = _a.showConfirm, attributes = __rest(_a, ["editable", "editing", "onCancel", "onConfirm", "showConfirm"]);
            if (editing) {
                return (React.createElement(ButtonList, null,
                    showConfirm &&
                        React.createElement(Button, { type: "secondary", small: true, onClick: onConfirm },
                            React.createElement(Icon, { type: "check-thin" })),
                    onCancel &&
                        React.createElement(Button, { type: "danger", small: true, onClick: onCancel },
                            React.createElement(Icon, { type: "x" }))));
            }
            if (editable) {
                return React.createElement(Icon, { type: "pencil", className: "segment-term-edit" });
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    SegmentTerm.prototype.render = function () {
        var _a = this.props, hasAddButton = _a.hasAddButton, hasSeparator = _a.hasSeparator, editable = _a.editable, editing = _a.editing, label = _a.label, onAddButtonClick = _a.onAddButtonClick, onEdit = _a.onEdit, queryName = _a.queryName, radios = _a.radios, renderAlert = _a.renderAlert, renderInputs = _a.renderInputs, title = _a.title, onCancel = _a.onCancel, onConfirm = _a.onConfirm, showConfirm = _a.showConfirm, className = _a.className, attributes = __rest(_a, ["hasAddButton", "hasSeparator", "editable", "editing", "label", "onAddButtonClick", "onEdit", "queryName", "radios", "renderAlert", "renderInputs", "title", "onCancel", "onConfirm", "showConfirm", "className"]);
        return (React.createElement("div", __assign({ className: cn('segment-term-wrap', className) }, attributes),
            React.createElement("p", { className: "segment-term-title" }, title),
            React.createElement("div", { className: cn('segment-term', {
                    'has-alert': !!renderAlert,
                    'has-radios': radios,
                    'has-separator': hasSeparator,
                    'is-editable': editing,
                }), onClick: (editable && !editing) ? onEdit : undefined },
                editing && renderInputs && renderInputs(),
                !editing &&
                    React.createElement("p", null, label + " ",
                        React.createElement("strong", null, queryName)),
                this.termControls,
                renderAlert && renderAlert()),
            hasAddButton &&
                React.createElement(ButtonList, null,
                    React.createElement(Button, { type: "secondary", icon: "plus", onClick: onAddButtonClick }, "Add Condition"))));
    };
    SegmentTerm.defaultProps = {
        editable: false,
        editing: false,
        hasAddButton: false,
        hasSeparator: false,
        radios: false,
    };
    return SegmentTerm;
}(PureComponent));
export { SegmentTerm };
//# sourceMappingURL=segment-term.js.map