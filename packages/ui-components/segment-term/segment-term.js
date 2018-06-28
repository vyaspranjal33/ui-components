import React, { PureComponent } from 'react';
import { Button } from '../button';
import { ButtonList } from '../button-list';
import { Icon } from '../icon';
import cn from '../utilities/classnames';
export class SegmentTerm extends PureComponent {
    get termControls() {
        const { isEditable, isEditing, onCancel, onConfirm, showConfirm } = this.props;
        if (isEditing) {
            return (React.createElement(ButtonList, null,
                showConfirm &&
                    React.createElement(Button, { type: "secondary", small: true, onClick: onConfirm },
                        React.createElement(Icon, { type: "check-thin" })),
                React.createElement(Button, { type: "danger", small: true, onClick: onCancel },
                    React.createElement(Icon, { type: "x" }))));
        }
        if (isEditable) {
            return React.createElement(Icon, { type: "pencil", className: "segment-term-edit" });
        }
        return null;
    }
    render() {
        const { hasAddButton, hasSeparator, isEditable, isEditing, label, onAddButtonClick, onEdit, queryName, renderInputs, title, } = this.props;
        return (React.createElement("div", { className: "segment-term-wrap" },
            React.createElement("p", { className: "segment-term-title" }, title),
            React.createElement("div", { className: cn('segment-term', { 'has-separator': hasSeparator, 'is-editable': isEditing }), onClick: (isEditable && !isEditing) ? onEdit : undefined },
                isEditing && renderInputs && renderInputs(),
                !isEditing &&
                    React.createElement("p", null,
                        `${label} `,
                        React.createElement("strong", null, queryName)),
                this.termControls),
            hasAddButton &&
                React.createElement(ButtonList, null,
                    React.createElement(Button, { type: "secondary", icon: "plus", onClick: onAddButtonClick }, "Add Condition"))));
    }
}
SegmentTerm.defaultProps = {
    hasAddButton: false,
    hasSeparator: false,
    isEditable: false,
    isEditing: false,
};
//# sourceMappingURL=segment-term.js.map