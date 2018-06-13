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
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import cn from './utilities/classnames';
import { modalWillReceiveProps } from './utilities/modals';
var evaluateRenderProp = function (prop) {
    return prop instanceof Function ? prop() : prop;
};
var CenterModal = /** @class */ (function (_super) {
    __extends(CenterModal, _super);
    function CenterModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CenterModal.prototype.componentWillReceiveProps = function (nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    };
    CenterModal.prototype.render = function () {
        var _a = this.props, hasX = _a.hasX, large = _a.large, modalContainer = _a.modalContainer, onClose = _a.onClose, open = _a.open, renderBody = _a.renderBody, renderFooter = _a.renderFooter, renderHeader = _a.renderHeader, bodyNode = _a.bodyNode, className = _a.className, attributes = __rest(_a, ["hasX", "large", "modalContainer", "onClose", "open", "renderBody", "renderFooter", "renderHeader", "bodyNode", "className"]);
        // Using <> instead of <Fragment> is breaking the linter.
        return ReactDOM.createPortal(React.createElement(Fragment, null,
            React.createElement("div", __assign({ className: cn('center-modal', className, {
                    'is-large': large,
                    'is-visible': open,
                }) }, attributes),
                hasX && (React.createElement("i", { className: "sg-icon sg-icon-x", "data-role": "close-center-modal", onClick: onClose })),
                renderHeader && React.createElement("h1", null, evaluateRenderProp(renderHeader)),
                evaluateRenderProp(renderBody),
                renderFooter && (React.createElement("div", { className: "modal-footer" }, evaluateRenderProp(renderFooter)))),
            React.createElement("div", { className: cn('modal-mask', { 'is-visible': open }), onClick: onClose })), modalContainer);
    };
    CenterModal.defaultProps = {
        bodyNode: document.body,
        hasX: false,
        large: false,
        modalContainer: document.body,
    };
    return CenterModal;
}(Component));
export { CenterModal };
export default CenterModal;
//# sourceMappingURL=center-modal.js.map