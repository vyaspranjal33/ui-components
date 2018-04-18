(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Table = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

var TableBody = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("tbody", { className: className }, children));
};

var TableCell = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("td", { className: className }, children));
};

var TableHeader = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("thead", { className: className }, children));
};

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

var HeaderCell = /** @class */ (function (_super) {
    __extends(HeaderCell, _super);
    function HeaderCell(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            if (_this.props.sortKey) {
                if (_this.props.ascending === false) {
                    _this.props.onClick(_this.props.sortKey, false);
                }
                else {
                    _this.props.onClick(_this.props.sortKey, true);
                }
            }
        };
        return _this;
    }
    HeaderCell.prototype.render = function () {
        return (React.createElement("th", { className: classNames(this.props.className, { sort: !(this.props.sortKey === undefined) }, { 'sort-asc': this.props.sorted && this.props.ascending === true }, { 'sort-desc': this.props.sorted && this.props.ascending === false }), onClick: this.handleClick }, this.props.children));
    };
    return HeaderCell;
}(React.Component));

var TableRow = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("tr", { className: className }, children));
};

var Table = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("table", { className: classNames('table-wrap', className) }, children));
};

exports.TableCell = TableCell;
exports.TableRow = TableRow;
exports.TableHeader = TableHeader;
exports.TableBody = TableBody;
exports.HeaderCell = HeaderCell;
exports.Table = Table;
exports.default = Table;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table.js.map
