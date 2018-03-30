(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Tooltip = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

var Tooltip = function (_a) {
    var content = _a.content, direction = _a.direction, className = _a.className, children = _a.children;
    return (React.createElement("span", { className: className, "data-tooltip": content, "data-tooltip-pos": direction }, children));
};
var HTMLTooltip = /** @class */ (function (_super) {
    __extends(HTMLTooltip, _super);
    function HTMLTooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
        };
        _this.handleHoverIn = function () {
            _this.setState({ hovered: true, opened: true, tooltipHeight: _this.tooltipRef.offsetHeight });
        };
        _this.handleHoverOut = function () {
            _this.setState({ hovered: false });
            setTimeout(function () {
                if (!_this.state.hovered) {
                    _this.setState({ opened: false });
                }
            }, _this.props.debounce);
        };
        _this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
        };
        _this.handleHoverIn = _this.handleHoverIn.bind(_this);
        _this.handleHoverOut = _this.handleHoverOut.bind(_this);
        return _this;
    }
    HTMLTooltip.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.state.opened === nextState.opened) {
            return false;
        }
        return true;
    };
    HTMLTooltip.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: "tooltip-js-parent", onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, this.props.hoverTarget),
            React.createElement("div", { className: classNames("tooltip-js-content " + this.props.className, {
                    'is-left': this.props.direction === 'left',
                    'is-visible': this.state.opened,
                }), style: { top: -(this.state.tooltipHeight / 2) - 3 }, ref: function (input) {
                    _this.tooltipRef = input;
                }, onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, this.props.children)));
    };
    HTMLTooltip.defaultProps = {
        className: '',
        debounce: 1000,
        direction: 'right',
    };
    return HTMLTooltip;
}(React.Component));

exports.Tooltip = Tooltip;
exports.default = Tooltip;
exports.HTMLTooltip = HTMLTooltip;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tooltip.js.map
