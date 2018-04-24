(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.ConfirmationModal = {}),global.React));
}(this, (function (exports,React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function classNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = '';
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (!arg) {
            continue;
        }
        if (typeof arg === 'string' || typeof arg === 'number') {
            result = result + " " + arg;
            continue;
        }
        if (Array.isArray(arg)) {
            result = result + " " + classNames.apply(void 0, arg);
            continue;
        }
        if (typeof arg === 'object') {
            var keys = Object.keys(arg);
            for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
                var key = keys_1[_b];
                if (arg[key]) {
                    result = result + " " + key;
                }
            }
        }
    }
    return result.trim();
}

var modalOpenClass = 'modal-open';
var modalWillReceiveProps = function (nextProps, currentProps) {
    if (nextProps.isOpen === currentProps.isOpen) {
        return;
    }
    var bodyNode = currentProps.bodyNode;
    if (nextProps.isOpen) {
        bodyNode.classList.add(modalOpenClass);
    }
    else {
        bodyNode.classList.remove(modalOpenClass);
    }
};

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
        return (React__default.createElement("div", { className: classNames('sg-modal', { 'is-visible': this.props.isOpen }) },
            React__default.createElement("div", { className: "conf-alert sg-modal-content" },
                React__default.createElement("h2", { className: "conf-alert-header" }, evaluateRenderProp(this.props.renderHeader)),
                React__default.createElement("div", { className: "conf-alert-body" },
                    React__default.createElement("p", { className: "conf-alert-text" }, evaluateRenderProp(this.props.renderBody))),
                React__default.createElement("div", { className: "conf-alert-actions" }, evaluateRenderProp(this.props.renderActions)))));
    };
    ConfirmationModal.defaultProps = { bodyNode: document.body };
    return ConfirmationModal;
}(React.Component));

exports.default = ConfirmationModal;
exports.ConfirmationModal = ConfirmationModal;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=confirmation-modal.js.map
