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
        var _a = this.props, iconType = _a.iconType, modalContainer = _a.modalContainer, renderBody = _a.renderBody, renderActions = _a.renderActions, renderHeader = _a.renderHeader, isOpen = _a.isOpen, bodyNode = _a.bodyNode, className = _a.className, attributes = __rest(_a, ["iconType", "modalContainer", "renderBody", "renderActions", "renderHeader", "isOpen", "bodyNode", "className"]);
        return ReactDOM.createPortal(React.createElement("div", __assign({ className: cn('sg-modal', className, { 'is-visible': isOpen }) }, attributes),
            React.createElement("div", { className: "conf-alert sg-modal-content" },
                React.createElement("h2", { className: cn('conf-alert-header', { 'conf-alert-header-with-icon': !!iconType }) },
                    !!iconType &&
                        React.createElement(Icon, { type: iconType }),
                    evaluateRenderProp(renderHeader)),
                React.createElement("div", { className: "conf-alert-body" },
                    React.createElement("p", { className: "conf-alert-text" }, evaluateRenderProp(renderBody))),
                React.createElement("div", { className: "conf-alert-actions" }, evaluateRenderProp(renderActions)))), modalContainer);
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