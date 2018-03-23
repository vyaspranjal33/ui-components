(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.ToggleButtons = {}),global.React));
}(this, (function (exports,React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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
exports.default = ToggleButtons;
exports.StatefulToggleButtons = StatefulToggleButtons;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=toggle-buttons.js.map
