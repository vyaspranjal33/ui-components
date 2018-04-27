import React, { Component } from 'react';
import cn from './utilities/classnames';
import { modalWillReceiveProps, } from './utilities/modals';
const evaluateRenderProp = (prop) => {
    return typeof prop === 'string' ? prop : prop();
};
export class ConfirmationModal extends Component {
    componentWillReceiveProps(nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    }
    render() {
        return (React.createElement("div", { className: cn('sg-modal', { 'is-visible': this.props.isOpen }) },
            React.createElement("div", { className: "conf-alert sg-modal-content" },
                React.createElement("h2", { className: "conf-alert-header" }, evaluateRenderProp(this.props.renderHeader)),
                React.createElement("div", { className: "conf-alert-body" },
                    React.createElement("p", { className: "conf-alert-text" }, evaluateRenderProp(this.props.renderBody))),
                React.createElement("div", { className: "conf-alert-actions" }, evaluateRenderProp(this.props.renderActions)))));
    }
}
ConfirmationModal.defaultProps = { bodyNode: document.body };
export default ConfirmationModal;
//# sourceMappingURL=confirmation-modal.js.map