import React, { Component } from 'react';
import Icon from './icon';
import Styles from './styles/text-area.module.scss';
import Tooltip, { TooltipDirection } from './tooltip';
import cn from './utilities/classnames';

export interface TextAreaProps {
  disabled?: boolean;
  error?: boolean;
  id: string;
  info?: string;
  label: string;
  maxHeight?: number;
  required?: boolean;
  scrollable?: boolean;
  tooltip?: string;
  tooltipDirection?: TooltipDirection;
  value: string;
}

export class TextArea extends Component<
  TextAreaProps & React.InputHTMLAttributes<HTMLTextAreaElement>
> {
  public static defaultProps = {
    disabled: false,
    error: false,
    maxHeight: 500,
    required: false,
    scrollable: false,
  };

  public state = { focused: false };
  public textarea: HTMLTextAreaElement;

  public get height(): string {
    const { maxHeight } = this.props;

    if (!this.textarea) {
      return '25px';
    }

    // This is a terrible, yet necessary, idea.
    this.textarea.style.height = '';

    return `${Math.min(this.textarea.scrollHeight, maxHeight)}px`;
  }

  public setFocused = () => this.setState({ focused: true });
  public setBlurred = () => this.setState({ focused: false });

  public render() {
    const {
      children,
      disabled,
      error,
      id,
      info,
      label,
      onChange: handleChange,
      required,
      scrollable,
      value,
      tooltip,
      tooltipDirection,
      ...attributes
    } = this.props;

    const { focused } = this.state;
    const hasValue = !!value;

    return (
      <div
        className={cn(Styles['textarea-wrap'], {
          [Styles['has-value']]: hasValue,
          [Styles['is-disabled']]: disabled,
          [Styles['is-error']]: error,
          [Styles['is-required']]: required,
          [Styles['is-scrollable']]: scrollable,
          [Styles['is-focused']]: focused,
        })}
      >
        <label className={cn(Styles['textarea-label'])} htmlFor={id}>
          {label}
        </label>
        <textarea
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={this.setFocused}
          onBlur={this.setBlurred}
          disabled={disabled}
          style={{ height: this.height }}
          ref={textarea => (this.textarea = textarea)}
          {...attributes}
        />
        {info && (
          <span
            className={cn(Styles['textarea-info'], {
              [Styles['is-error']]: error,
            })}
            id={`${id}-info`}
          >
            {info}
          </span>
        )}
        {children}
        {tooltip && (
          <div className={Styles['textarea-tooltip']}>
            <Tooltip
              content={tooltip}
              length="large"
              direction={tooltipDirection}
            >
              <Icon type="info-circle" />
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
}

export default TextArea;
