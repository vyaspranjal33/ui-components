import React, { PureComponent } from 'react';
import { Button } from './button';
import { ButtonList } from './button-list';
import { Icon } from './icon';
import cn from './utilities/classnames';
export class SegmentTerm extends PureComponent {
    get termControls() {
        const { editable, editing, onCancel, onConfirm, showConfirm } = this.props;
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
    }
    render() {
        const { hasAddButton, hasSeparator, editable, editing, label, onAddButtonClick, onEdit, queryName, radios, renderAlert, renderInputs, title, } = this.props;
        return (React.createElement("div", { className: "segment-term-wrap" },
            React.createElement("p", { className: "segment-term-title" }, title),
            React.createElement("div", { className: cn('segment-term', {
                    'has-alert': !!renderAlert,
                    'has-radios': radios,
                    'has-separator': hasSeparator,
                    'is-editable': editing,
                }), onClick: (editable && !editing) ? onEdit : undefined },
                editing && renderInputs && renderInputs(),
                !editing &&
                    React.createElement("p", null,
                        `${label} `,
                        React.createElement("strong", null, queryName)),
                this.termControls,
                renderAlert && renderAlert()),
            hasAddButton &&
                React.createElement(ButtonList, null,
                    React.createElement(Button, { type: "secondary", icon: "plus", onClick: onAddButtonClick }, "Add Condition"))));
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