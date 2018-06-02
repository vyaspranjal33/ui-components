import React, { CSSProperties } from 'react';
import cn from './utilities/classnames';

import { InputType } from './types/inputs';

const convertInputValue = (value: string, inputType: InputType) => {
  return inputType === 'number' ? parseInt(value, 10) : value;
};

const onInputFocus = function() {
  this.setState({ isInputFocused: true });
};

export interface TextInputProps {
  children?: React.ReactNode;
  type: InputType;
  id: string;
  onChange: (event: any, value: string | number) => void;
  value?: string | number;
  name?: string;
  fullWidth?: boolean;
  isValid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isLarge?: boolean;
  isSearch?: boolean;
  label?: string;
  info?: string;
  onBlur?: (event: any, value: string | number) => void;
  style?: CSSProperties;
}

export class TextInput extends React.Component<
  TextInputProps,
  { isInputFocused: boolean }
> {
  public static defaultProps = {
    fullWidth: false,
    info: '',
    isDisabled: false,
    isLarge: false,
    isRequired: false,
    isSearch: false,
    isValid: true,
    label: '',
    style: {} as CSSProperties,
    value: '',
  };

  public onInputFocus: (event: any) => void;

  constructor(props: TextInputProps) {
    super(props);

    this.state = {
      isInputFocused: false,
    };
    this.onInputFocus = onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  get inputStyle() {
    const { fullWidth, style } = this.props;
    if (fullWidth) {
      return { ...style, width: '100%' };
    }
    return style;
  }

  public onValueChange(event: any) {
    const value = convertInputValue(event.target.value, this.props.type);
    this.props.onChange(event, value);
  }

  public onInputBlur(event: any) {
    this.setState({ isInputFocused: false });

    if (event !== undefined && this.props.onBlur) {
      const value = convertInputValue(event.target.value, this.props.type);
      this.props.onBlur(event, value);
    }
  }

  public render() {
    const {
      children,
      type,
      id,
      onChange,
      value,
      name,
      fullWidth,
      isValid,
      isRequired,
      isDisabled,
      isLarge,
      isSearch,
      label,
      info,
      onBlur,
      style,
      ...attributes
    } = this.props;

    const classes = cn('input-text-wrap', {
      'has-value': !!value || value === 0,
      'is-disabled': isDisabled,
      'is-error': !isValid,
      'is-focused': this.state.isInputFocused,
      'is-large': isLarge,
      'is-required': isRequired,
      'is-search': isSearch,
    });

    const infoId = info && `${id}-info`;

    return (
      <div className={classes} style={this.inputStyle}>
        <label className="input-text-label" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          value={value}
          name={name}
          type={type}
          onChange={this.onValueChange}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          aria-describedby={infoId}
          {...attributes}
        />
        {info && (
          <span
            className={cn('input-info', {
              danger: !isValid,
            })}
            id={infoId}
          >
            {info}
          </span>
        )}
        {children || ''}
      </div>
    );
  }
}

export class StatefulTextInput extends React.Component<TextInputProps> {
  public static defaultProps: Partial<TextInputProps> = {
    value: '',
  };

  constructor(props: TextInputProps) {
    super(props);

    this.state = {
      value: this.props.value,
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  public onValueChange(event: any) {
    const value = convertInputValue(event.target.value, this.props.type);

    this.setState({ value });
    this.props.onChange(event, value);
  }

  public render() {
    return (
      <TextInput
        {...this.props}
        {...this.state}
        onChange={this.onValueChange}
      />
    );
  }
}
