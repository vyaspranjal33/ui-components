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
import React, { Component, Fragment } from 'react';
import cn from './utilities/classnames';
import { modalWillReceiveProps, } from './utilities/modals';
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
        // Using <> instead of <Fragment> is breaking the linter.
        return (React.createElement(Fragment, null,
            React.createElement("div", { className: cn('center-modal', { 'is-visible': this.props.open, 'is-large': this.props.large }) },
                this.props.hasX &&
                    (React.createElement("i", { className: "sg-icon sg-icon-x", "data-role": "close-center-modal", onClick: this.props.onClose })),
                this.props.renderHeader && React.createElement("h1", null, evaluateRenderProp(this.props.renderHeader)),
                evaluateRenderProp(this.props.renderBody),
                this.props.renderFooter &&
                    (React.createElement("div", { className: "modal-footer" }, evaluateRenderProp(this.props.renderFooter)))),
            React.createElement("div", { className: cn('modal-mask', { 'is-visible': this.props.open }), onClick: this.props.onClose })));
    };
    CenterModal.defaultProps = {
        bodyNode: document.body,
        hasX: false,
        large: false,
    };
    return CenterModal;
}(Component));
export { CenterModal };
export default CenterModal;
//# sourceMappingURL=center-modal.js.map