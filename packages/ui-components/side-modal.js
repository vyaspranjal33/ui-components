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
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import cn from './utilities/classnames';
import { modalWillReceiveProps, } from './utilities/modals';
var SideModal = /** @class */ (function (_super) {
    __extends(SideModal, _super);
    function SideModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SideModal.prototype.componentWillReceiveProps = function (nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    };
    SideModal.prototype.render = function () {
        return ReactDOM.createPortal(React.createElement(Fragment, null,
            React.createElement("div", { className: cn('side-modal', { 'is-visible': this.props.isOpen }) }, this.props.children),
            React.createElement("div", { className: cn('modal-mask', { 'is-visible': this.props.isOpen }), onClick: this.props.onClose })), this.props.modalContainer);
    };
    SideModal.defaultProps = {
        bodyNode: document.body,
        modalContainer: document.body,
    };
    return SideModal;
}(React.Component));
export { SideModal };
export default SideModal;
//# sourceMappingURL=side-modal.js.map