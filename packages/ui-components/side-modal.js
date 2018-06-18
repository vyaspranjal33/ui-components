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
import ReactDOM from 'react-dom';
import Styles from './styles/modal.module.scss';
import cn from './utilities/classnames';
import { modalWillReceiveProps } from './utilities/modals';
export class SideModal extends React.Component {
    componentWillReceiveProps(nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    }
    render() {
        const _a = this.props, { isOpen, onClose, children, modalContainer, bodyNode, className } = _a, attributes = __rest(_a, ["isOpen", "onClose", "children", "modalContainer", "bodyNode", "className"]);
        return ReactDOM.createPortal(React.createElement(Fragment, null,
            React.createElement("div", Object.assign({ className: cn(Styles['side-modal'], className, {
                    [Styles['is-visible']]: this.props.isOpen,
                }) }, attributes), children),
            React.createElement("div", { className: cn(Styles['modal-mask'], {
                    [Styles['is-visible']]: this.props.isOpen,
                }), onClick: onClose })), modalContainer);
    }
}
SideModal.defaultProps = {
    bodyNode: document.body,
    modalContainer: document.body,
};
export default SideModal;
//# sourceMappingURL=side-modal.js.map