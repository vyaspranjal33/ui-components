(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.slider = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var Slider = function (_a) {
    var value = _a.value, id = _a.id, label = _a.label, handleChange = _a.onChange;
    return (React.createElement("div", { className: "input-range-wrap" },
        React.createElement("input", { id: id, max: "100", min: "0", onChange: handleChange, type: "range", value: value }),
        label && React.createElement("div", { className: "input-range-percent" },
            value,
            "%")));
};
var StatefulSlider = /** @class */ (function (_super) {
    __extends(StatefulSlider, _super);
    function StatefulSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.value,
        };
        _this.handleChange = function (event) {
            var value = event.target.value;
            _this.setState({ value: value }, function () {
                _this.props.onChange(event, value);
            });
        };
        return _this;
    }
    StatefulSlider.prototype.render = function () {
        var onChange = this.props.onChange;
        var value = this.state.value;
        return (React.createElement(Slider, __assign({}, this.props, { value: value, onChange: this.handleChange })));
    };
    return StatefulSlider;
}(React.Component));
Slider.defaultProps = {
    label: true,
    value: 0,
};

exports.Slider = Slider;
exports.StatefulSlider = StatefulSlider;
exports.default = Slider;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=slider.js.map
