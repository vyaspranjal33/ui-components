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
import Styles from './styles/confirmation-modal.module.scss';
import cn from './utilities/classnames';
import { modalWillReceiveProps } from './utilities/modals';
const evaluateRenderProp = prop => {
    return typeof prop === 'string' ? prop : prop();
};
export class ConfirmationModal extends Component {
    componentDidUpdate(prevProps) {
        modalWillReceiveProps(this.props, prevProps);
    }
    render() {
        const _a = this.props, { iconType, modalContainer, renderBody, renderActions, renderHeader, isOpen, bodyNode, className } = _a, attributes = __rest(_a, ["iconType", "modalContainer", "renderBody", "renderActions", "renderHeader", "isOpen", "bodyNode", "className"]);
        return ReactDOM.createPortal(React.createElement("div", Object.assign({ className: cn('sg-modal', Styles['sg-modal'], className, {
                [Styles['is-visible']]: this.props.isOpen,
                'is-visible': this.props.isOpen,
            }) }, attributes),
            React.createElement("div", { className: cn('conf-alert', Styles['conf-alert'], 'sg-modal-content', Styles['sg-modal-content']) },
                React.createElement("h2", { className: cn('conf-alert-header', Styles['conf-alert-header'], {
                        [Styles['conf-alert-header-with-icon']]: !!this.props.iconType,
                        'conf-alert-header-with-icon': !!this.props.iconType,
                    }) },
                    !!this.props.iconType && React.createElement(Icon, { type: this.props.iconType }),
                    evaluateRenderProp(this.props.renderHeader)),
                React.createElement("div", { className: cn('conf-alert-body', Styles['conf-alert-body']) },
                    React.createElement("p", { className: cn('conf-alert-text', Styles['conf-alert-text']) }, evaluateRenderProp(this.props.renderBody))),
                React.createElement("div", { className: cn('conf-alert-actions', Styles['conf-alert-actions']) }, evaluateRenderProp(this.props.renderActions)))), modalContainer);
    }
}
ConfirmationModal.defaultProps = {
    bodyNode: document.body,
    modalContainer: document.body,
};
export default ConfirmationModal;
//# sourceMappingURL=confirmation-modal.js.map