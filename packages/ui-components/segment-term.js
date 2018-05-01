import React, { PureComponent } from 'react';
import { Button } from './button';
import { ButtonList } from './button-list';
import { Icon } from './icon';
import cn from './utilities/classnames';
export class SegmentTerm extends PureComponent {
    get termControls() {
        const { isEditable, isEditing, onCancel, onConfirm, showConfirm } = this.props;
        if (isEditing) {
            return (React.createElement(ButtonList, null,
                showConfirm &&
                    React.createElement(Button, { type: "secondary", small: true, onClick: onConfirm },
                        React.createElement(Icon, { type: "check-thin" })),
                onCancel &&
                    React.createElement(Button, { type: "danger", small: true, onClick: onCancel },
                        React.createElement(Icon, { type: "x" }))));
        }
        if (isEditable) {
            return React.createElement(Icon, { type: "pencil", className: "segment-term-edit" });
        }
        return null;
    }
<<<<<<< HEAD
    render() {
        const { hasAddButton, hasSeparator, isEditable, isEditing, label, onAddButtonClick, onEdit, queryName, radios, renderAlert, renderInputs, title, } = this.props;
=======
    Object.defineProperty(SegmentTerm.prototype, "termControls", {
        get: function () {
            var _a = this.props, editable = _a.editable, editing = _a.editing, onCancel = _a.onCancel, onConfirm = _a.onConfirm, showConfirm = _a.showConfirm;
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
        var _a = this.props, hasAddButton = _a.hasAddButton, hasSeparator = _a.hasSeparator, editable = _a.editable, editing = _a.editing, label = _a.label, onAddButtonClick = _a.onAddButtonClick, onEdit = _a.onEdit, queryName = _a.queryName, radios = _a.radios, renderAlert = _a.renderAlert, renderInputs = _a.renderInputs, title = _a.title;
>>>>>>> 3847efcccf5ebca2e4dc3a3fe5bf8592837f3bf0
        return (React.createElement("div", { className: "segment-term-wrap" },
            React.createElement("p", { className: "segment-term-title" }, title),
            React.createElement("div", { className: cn('segment-term', {
                    'has-alert': !!renderAlert,
                    'has-radios': radios,
                    'has-separator': hasSeparator,
<<<<<<< HEAD
                    'is-editable': isEditing,
                }), onClick: (isEditable && !isEditing) ? onEdit : undefined },
                isEditing && renderInputs && renderInputs(),
                !isEditing &&
                    React.createElement("p", null,
                        `${label} `,
=======
                    'is-editable': editing,
                }), onClick: (editable && !editing) ? onEdit : undefined },
                editing && renderInputs && renderInputs(),
                !editing &&
                    React.createElement("p", null, label + " ",
>>>>>>> 3847efcccf5ebca2e4dc3a3fe5bf8592837f3bf0
                        React.createElement("strong", null, queryName)),
                this.termControls,
                renderAlert && renderAlert()),
            hasAddButton &&
                React.createElement(ButtonList, null,
                    React.createElement(Button, { type: "secondary", icon: "plus", onClick: onAddButtonClick }, "Add Condition"))));
<<<<<<< HEAD
    }
}
SegmentTerm.defaultProps = {
    hasAddButton: false,
    hasSeparator: false,
    isEditable: false,
    isEditing: false,
    radios: false,
};
=======
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
>>>>>>> 3847efcccf5ebca2e4dc3a3fe5bf8592837f3bf0
//# sourceMappingURL=segment-term.js.map