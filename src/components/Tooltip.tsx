import React from 'react';
import cn from '../utilities/classnames';

export interface TooltipProps {
  content?: string;
  direction?: string;
  className?: string;
}

export interface HTMLTooltipProps {
  parent?: string;
  isLeft?: boolean;
  className?: string;
}

export class Tooltip extends React.Component<TooltipProps> {
  public render() {
    const classes = this.props.className ? this.props.className : ""
    const content = this.props.content
    const direction = this.props.direction
    const children = this.props.children

    return (
      <span className={classes} data-tooltip={content} data-tooltip-pos={direction}>{children}</span>
    );

  }
};

export class HTMLTooltip extends React.Component<HTMLTooltipProps> {
  public render() {
    const parent = {"__html": this.props.parent}
    const children = this.props.children
    const isLeft = this.props.isLeft
    const classes = this.props.className ? this.props.className + " tooltip-js-content" : "tooltip-js-content"

    return (
      <div>
        <div className="tooltip-js-parent" dangerouslySetInnerHTML={parent}></div>
        <div className={classes}>{children}</div>
      </div>
    );
  }
}

export default Tooltip;