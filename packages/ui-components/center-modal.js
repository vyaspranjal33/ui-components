(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.CenterModal = {}),global.React));
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
        return (React__default.createElement(React.Fragment, null,
            React__default.createElement("div", { className: classNames('center-modal', { 'is-visible': this.props.open, 'is-large': this.props.large }) },
                this.props.hasX &&
                    (React__default.createElement("i", { className: "sg-icon sg-icon-x", "data-role": "close-center-modal", onClick: this.props.onClose })),
                this.props.renderHeader && React__default.createElement("h1", null, evaluateRenderProp(this.props.renderHeader)),
                evaluateRenderProp(this.props.renderBody),
                this.props.renderFooter &&
                    (React__default.createElement("div", { className: "modal-footer" }, evaluateRenderProp(this.props.renderFooter)))),
            React__default.createElement("div", { className: classNames('modal-mask', { 'is-visible': this.props.open }), onClick: this.props.onClose })));
    };
    CenterModal.defaultProps = {
        bodyNode: document.body,
        hasX: false,
        large: false,
    };
    return CenterModal;
}(React.Component));

exports.default = CenterModal;
exports.CenterModal = CenterModal;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=center-modal.js.map
