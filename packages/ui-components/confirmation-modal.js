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
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './icon';
import cn from './utilities/classnames';
import { modalWillReceiveProps, } from './utilities/modals';
var evaluateRenderProp = function (prop) {
    return typeof prop === 'string' ? prop : prop();
};
var ConfirmationModal = /** @class */ (function (_super) {
    __extends(ConfirmationModal, _super);
    function ConfirmationModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmationModal.prototype.componentWillReceiveProps = function (nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    };
    ConfirmationModal.prototype.render = function () {
        return ReactDOM.createPortal(React.createElement("div", { className: cn('sg-modal', { 'is-visible': this.props.isOpen }) },
            React.createElement("div", { className: "conf-alert sg-modal-content" },
                React.createElement("h2", { className: cn('conf-alert-header', { 'conf-alert-header-with-icon': !!this.props.iconType }) },
                    !!this.props.iconType &&
                        React.createElement(Icon, { type: this.props.iconType }),
                    evaluateRenderProp(this.props.renderHeader)),
                React.createElement("div", { className: "conf-alert-body" },
                    React.createElement("p", { className: "conf-alert-text" }, evaluateRenderProp(this.props.renderBody))),
                React.createElement("div", { className: "conf-alert-actions" }, evaluateRenderProp(this.props.renderActions)))), this.props.modalContainer);
    };
    ConfirmationModal.defaultProps = {
        bodyNode: document.body,
        modalContainer: document.body,
    };
    return ConfirmationModal;
}(Component));
export { ConfirmationModal };
export default ConfirmationModal;
//# sourceMappingURL=confirmation-modal.js.map