(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global['toggle-buttons'] = {}),global.React));
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

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var findActiveIndex = function (components) {
    var activeIndex = React.Children.map(components, function (component) { return component.props.active; }).indexOf(true);
    if (activeIndex === -1) {
        return 0;
    }
    return activeIndex;
};

var map = React__default.Children.map;
var ToggleButtons = function (_a) {
    var children = _a.children, onChange = _a.onChange;
    return (React__default.createElement("div", { className: "btn-group" }, map(children, function (button, index) {
        return React__default.cloneElement(button, {
            onClick: function (event) {
                var _a = button.props, label = _a.children, onClick = _a.onClick;
                onClick(event);
                onChange(event, label, index);
            },
            type: 'group-item',
        });
    })));
};
var StatefulToggleButtons = /** @class */ (function (_super) {
    __extends(StatefulToggleButtons, _super);
    function StatefulToggleButtons() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: findActiveIndex(_this.props.children),
        };
        return _this;
    }
    StatefulToggleButtons.prototype.render = function () {
        var activeIndex = this.state.activeIndex;
        var buttons = map(this.props.children, function (button, index) {
            return React__default.cloneElement(button, {
                active: index === activeIndex,
            });
        });
        return (React__default.createElement(ToggleButtons, __assign({}, this.props, { onChange: this.handleChange }), buttons));
    };
    StatefulToggleButtons.prototype.handleChange = function (event, label, index) {
        var handleChange = this.props.onChange;
        this.setState({
            activeIndex: index,
        }, function () {
            handleChange(event, label, index);
        });
    };
    return StatefulToggleButtons;
}(React__default.Component));

exports.ToggleButtons = ToggleButtons;
exports.StatefulToggleButtons = StatefulToggleButtons;
exports.default = ToggleButtons;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=toggle-buttons.js.map
