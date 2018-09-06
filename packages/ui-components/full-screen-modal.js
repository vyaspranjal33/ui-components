var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './icon';
import cn from './utilities/classnames';
import { modalWillReceiveProps } from './utilities/modals';
import Styles from './styles/fullscreen-modal.module.scss';
export class FullscreenModal extends Component {
    componentDidUpdate(prevProps) {
        modalWillReceiveProps(this.props, prevProps);
    }
    render() {
        const _a = this.props, { bodyNode, children, className, hasPadding, isOpen, modalContainer, onClose, title } = _a, attributes = __rest(_a, ["bodyNode", "children", "className", "hasPadding", "isOpen", "modalContainer", "onClose", "title"]);
        return ReactDOM.createPortal(React.createElement("div", Object.assign({ className: cn('modal-fullscreen', Styles['modal-fullscreen'], { [Styles['is-open']]: isOpen }, className) }, attributes),
            React.createElement("header", { className: "modal-fullscreen-header" },
                React.createElement("a", { className: "modal-close", onClick: onClose },
                    React.createElement(Icon, { type: "x" })),
                React.createElement("h2", null, title)),
            React.createElement("div", { className: cn('modal-content', { 'has-padding': hasPadding }) }, children)), modalContainer);
    }
}
FullscreenModal.defaultProps = {
    bodyNode: document.body,
    hasPadding: true,
    modalContainer: document.body,
    onClose: () => { },
};
export default FullscreenModal;
//# sourceMappingURL=full-screen-modal.js.map