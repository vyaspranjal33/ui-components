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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
import cn from './utilities/classnames';
import { modalWillReceiveProps } from './utilities/modals';
var SideModal = /** @class */ (function (_super) {
    __extends(SideModal, _super);
    function SideModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SideModal.prototype.componentWillReceiveProps = function (nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    };
    SideModal.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children, modalContainer = _a.modalContainer, bodyNode = _a.bodyNode, className = _a.className, attributes = __rest(_a, ["isOpen", "onClose", "children", "modalContainer", "bodyNode", "className"]);
        return ReactDOM.createPortal(React.createElement(Fragment, null,
            React.createElement("div", __assign({ className: cn('side-modal', className, { 'is-visible': isOpen }) }, attributes), children),
            React.createElement("div", { className: cn('modal-mask', { 'is-visible': isOpen }), onClick: onClose })), modalContainer);
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