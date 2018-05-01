import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './icon';
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
        return ReactDOM.createPortal(React.createElement("div", { className: cn('sg-modal', { 'is-visible': this.props.isOpen }) },
            React.createElement("div", { className: "conf-alert sg-modal-content" },
                React.createElement("h2", { className: cn('conf-alert-header', { 'conf-alert-header-with-icon': !!this.props.iconType }) },
                    !!this.props.iconType &&
                        React.createElement(Icon, { type: this.props.iconType }),
                    evaluateRenderProp(this.props.renderHeader)),
                React.createElement("div", { className: "conf-alert-body" },
                    React.createElement("p", { className: "conf-alert-text" }, evaluateRenderProp(this.props.renderBody))),
                React.createElement("div", { className: "conf-alert-actions" }, evaluateRenderProp(this.props.renderActions)))), this.props.modalContainer);
    }
}
ConfirmationModal.defaultProps = {
    bodyNode: document.body,
    modalContainer: document.body,
};
export default ConfirmationModal;
//# sourceMappingURL=confirmation-modal.js.map