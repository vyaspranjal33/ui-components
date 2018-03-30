(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Tabs = {}),global.React));
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

var findActiveIndex = function (components) {
    var activeIndex = React.Children.map(components, function (component) { return component.props.active; }).indexOf(true);
    if (activeIndex === -1) {
        return 0;
    }
    return activeIndex;
};

var map = React__default.Children.map;
var Tab = function (_a) {
    var active = _a.active, children = _a.children, handleClick = _a.onClick, number = _a.number;
    return (React__default.createElement("li", { className: classNames('tab', {
            'is-active': active,
        }), onClick: handleClick },
        children,
        " ",
        number && React__default.createElement("span", { className: "tab-number" }, number)));
};
Tab.defaultProps = {
    active: false,
};
var Tabs = function (_a) {
    var centered = _a.centered, children = _a.children, zeroBorder = _a.zeroBorder, onChange = _a.onChange;
    return (React__default.createElement("ul", { className: classNames('tab-wrapper', {
            'is-centered': centered,
            'zero-border': zeroBorder,
        }) }, map(children, function (tab, index) {
        return React__default.cloneElement(tab, {
            onClick: function (event) {
                var _a = tab.props, label = _a.children, onClick = _a.onClick;
                onClick(event);
                onChange(event, label, index);
            },
        });
    })));
};
var StatefulTabs = /** @class */ (function (_super) {
    __extends(StatefulTabs, _super);
    function StatefulTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: findActiveIndex(_this.props.children),
        };
        _this.handleChange = function (event, label, index) {
            var handleChange = _this.props.onChange;
            _this.setState({
                activeIndex: index,
            }, function () {
                handleChange(event, label, index);
            });
        };
        return _this;
    }
    StatefulTabs.prototype.render = function () {
        var activeIndex = this.state.activeIndex;
        var tabs = map(this.props.children, function (tab, index) {
            return React__default.cloneElement(tab, {
                active: index === activeIndex,
            });
        });
        return (React__default.createElement(Tabs, __assign({}, this.props, { onChange: this.handleChange }), tabs));
    };
    return StatefulTabs;
}(React__default.Component));

exports.Tab = Tab;
exports.Tabs = Tabs;
exports.default = Tabs;
exports.StatefulTabs = StatefulTabs;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tabs.js.map
