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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import cn from './utilities/classnames';
export var Tooltip = function (_a) {
    var content = _a.content, direction = _a.direction, length = _a.length, className = _a.className, children = _a.children, attributes = __rest(_a, ["content", "direction", "length", "className", "children"]);
    return (React.createElement("span", __assign({ className: className, "data-tooltip": content, "data-tooltip-pos": direction, "data-tooltip-length": length }, attributes), children));
};
Tooltip.defaultProps = {
    direction: 'up',
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
        var _a = this.props, direction = _a.direction, className = _a.className, children = _a.children, hoverTarget = _a.hoverTarget, debounce = _a.debounce, style = _a.style, attributes = __rest(_a, ["direction", "className", "children", "hoverTarget", "debounce", "style"]);
        return (React.createElement("div", __assign({ style: __assign({ position: 'relative' }, style) }, attributes),
            React.createElement("div", { className: "tooltip-js-parent", onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, hoverTarget),
            React.createElement("div", { className: cn("tooltip-js-content " + className, {
                    'is-left': direction === 'left',
                    'is-visible': this.state.opened,
                }), style: { top: -(this.state.tooltipHeight / 2) - 3 }, "data-tooltip-length": this.props.length, ref: function (input) {
                    _this.tooltipRef = input;
                }, onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, children)));
    };
    HTMLTooltip.defaultProps = {
        className: '',
        debounce: 1000,
        direction: 'right',
    };
    return HTMLTooltip;
}(React.Component));
export { HTMLTooltip };
export default Tooltip;
//# sourceMappingURL=tooltip.js.map