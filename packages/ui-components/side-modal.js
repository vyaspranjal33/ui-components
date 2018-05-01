import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import cn from './utilities/classnames';
import { modalWillReceiveProps, } from './utilities/modals';
export class SideModal extends React.Component {
    componentWillReceiveProps(nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    }
    render() {
        return ReactDOM.createPortal(React.createElement(Fragment, null,
            React.createElement("div", { className: cn('side-modal', { 'is-visible': this.props.isOpen }) }, this.props.children),
            React.createElement("div", { className: cn('modal-mask', { 'is-visible': this.props.isOpen }), onClick: this.props.onClose })), this.props.modalContainer);
    }
}
SideModal.defaultProps = {
    bodyNode: document.body,
    modalContainer: document.body,
};
export default SideModal;
//# sourceMappingURL=side-modal.js.map