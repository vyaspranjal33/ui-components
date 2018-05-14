import React from 'react';
import cn from './utilities/classnames';

export type TooltipDirection = 'up' | 'down' | 'left' | 'right';

export interface TooltipProps {
  content?: string;
  direction?: TooltipDirection;
  className?: string;
  children?: React.ReactElement<any>;
}

export const Tooltip: React.SFC<TooltipProps> = ({
  content,
  direction,
  className,
  children,
  ...attributes,
}) => {
  return (
    <span
      className={className}
      data-tooltip={content}
      data-tooltip-pos={direction}
      {...attributes}
    >
      {children}
    </span>
  );
};

export type HtmlTooltipDirection = 'left' | 'right';

export interface HTMLTooltipProps {
  direction?: TooltipDirection;
  className?: string;
  children?: React.ReactElement<any>;
  hoverTarget?: React.ReactElement<any>;
  debounce?: number;
}

export interface HTMLTooltipState {
  hovered: boolean;
  tooltipHeight: number;
  opened: boolean;
}

export class HTMLTooltip extends React.Component<
  HTMLTooltipProps,
  HTMLTooltipState
> {

  public static defaultProps = {
    className: '',
    debounce: 1000,
    direction: 'right',
  };

  public state = {
    hovered: false,
    opened: false,
    tooltipHeight: 0,
  };

  private tooltipRef: HTMLDivElement;

  constructor(props: HTMLTooltipProps) {
    super(props);

    this.state = {
      hovered: false,
      opened: false,
      tooltipHeight: 0,
    };

    this.handleHoverIn = this.handleHoverIn.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);
  }

  public shouldComponentUpdate(nextProps?: any, nextState?: any) {
    if (this.state.opened === nextState.opened) {
      return false;
    }
    return true;
  }

  public handleHoverIn = () => {
    this.setState({ hovered: true, opened: true, tooltipHeight: this.tooltipRef.offsetHeight });
  }

  public handleHoverOut = () => {
    this.setState({ hovered: false });
    setTimeout(() => {
      if (!this.state.hovered) {
        this.setState({ opened: false });
      }
    }, this.props.debounce);
  }

  public render() {
    const {
      direction,
      className,
      children,
      hoverTarget,
      debounce,
      ...attributes,
    } = this.props;

    return (
      <div {...attributes}>
        <div className="tooltip-js-parent" onMouseEnter={this.handleHoverIn} onMouseLeave={this.handleHoverOut}>
          {hoverTarget}
        </div>
        <div
          className={cn(`tooltip-js-content ${className}`, {
            'is-left': direction === 'left',
            'is-visible': this.state.opened,
          })}
          style={{ top: -(this.state.tooltipHeight / 2) - 3 }}
          ref={(input) => {
            this.tooltipRef = input;
          }}
          onMouseEnter={this.handleHoverIn}
          onMouseLeave={this.handleHoverOut}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Tooltip;
