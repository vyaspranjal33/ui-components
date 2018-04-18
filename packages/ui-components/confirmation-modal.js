(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.ConfirmationModal = {}),global.React));
}(this, (function (exports,React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
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

exports.ConfirmationModal = ConfirmationModal;
exports.default = ConfirmationModal;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=confirmation-modal.js.map
