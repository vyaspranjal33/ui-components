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
import React from 'react';
import cn from './utilities/classnames';
export var Tooltip = function (_a) {
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
            React.createElement("div", { className: cn("tooltip-js-content " + this.props.className, {
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
export { HTMLTooltip };
export default Tooltip;
//# sourceMappingURL=tooltip.js.map