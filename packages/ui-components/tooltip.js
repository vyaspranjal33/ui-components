import React from 'react';
import cn from './utilities/classnames';
export const Tooltip = ({ content, direction, className, children, }) => {
    return (React.createElement("span", { className: className, "data-tooltip": content, "data-tooltip-pos": direction }, children));
};
export class HTMLTooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
        };
        this.handleHoverIn = () => {
            this.setState({ hovered: true, opened: true, tooltipHeight: this.tooltipRef.offsetHeight });
        };
        this.handleHoverOut = () => {
            this.setState({ hovered: false });
            setTimeout(() => {
                if (!this.state.hovered) {
                    this.setState({ opened: false });
                }
            }, this.props.debounce);
        };
        this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
        };
        this.handleHoverIn = this.handleHoverIn.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.opened === nextState.opened) {
            return false;
        }
        return true;
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "tooltip-js-parent", onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, this.props.hoverTarget),
            React.createElement("div", { className: cn(`tooltip-js-content ${this.props.className}`, {
                    'is-left': this.props.direction === 'left',
                    'is-visible': this.state.opened,
                }), style: { top: -(this.state.tooltipHeight / 2) - 3 }, ref: (input) => {
                    this.tooltipRef = input;
                }, onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, this.props.children)));
    }
}
HTMLTooltip.defaultProps = {
    className: '',
    debounce: 1000,
    direction: 'right',
};
export default Tooltip;
//# sourceMappingURL=tooltip.js.map