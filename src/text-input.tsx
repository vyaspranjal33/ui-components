import React, { CSSProperties } from 'react';
import cn from './utilities/classnames';

import { InputType } from './types/inputs';

const convertInputValue = (value: string, inputType: InputType) => {
  return inputType === 'number' ? parseInt(value, 10) : value;
};

const onInputFocus = function() {
  this.setState({ isInputFocused: true });
};

const getRenderedTextInput = function(value?: string | number) {
  const classes = cn('input-text-wrap', {
    'has-value': !!value || value === 0,
    'is-disabled': this.props.isDisabled,
    'is-error': !this.props.isValid,
    'is-focused': this.state.isInputFocused,
    'is-large': this.props.isLarge,
    'is-required': this.props.isRequired,
    'is-search': this.props.isSearch,
  });

  const infoId = this.props.info && `${this.props.id}-info`;
  const children = this.props.children || '';

  return (
    <div className={classes} style={this.inputStyle}>
      <label className="input-text-label" htmlFor={this.props.id}>
        {this.props.label}
      </label>
      <input
        id={this.props.id}
        value={this.props.value}
        type={this.props.type}
        onChange={this.onValueChange}
        onFocus={this.onInputFocus}
        onBlur={this.onInputBlur}
        aria-describedby={infoId}
      />
      {this.props.info && (
        <span
          className={cn('input-info', {
            danger: !this.props.isValid,
          })}
          id={infoId}
        >
          {this.props.info}
        </span>
      )}
      {children}
    </div>
  );
};

export interface TextInputProps {
  children?: React.ReactNode;
  type: InputType;
  id: string;
  onChange: (event: any, value: string | number) => void;
  value?: string | number;
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
    if (fullWidth) { return {...style, width: '100%'}; }
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
    return getRenderedTextInput.call(this, this.props.value);
  }
}

export class StatefulTextInput extends React.Component<
  TextInputProps,
  { isInputFocused: boolean; value: string | number }
> {
  public static defaultProps: Partial<TextInputProps> = {
    isValid: true,
  };
  public onInputFocus: (event: any) => void;

  constructor(props: TextInputProps) {
    super(props);

    this.state = {
      isInputFocused: false,
      value: '',
    };
    this.onInputFocus = onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  public onValueChange(event: any) {
    const value = convertInputValue(event.target.value, this.props.type);

    this.setState({ value });
    this.props.onChange(event, value);
  }

  public onInputBlur(event: any) {
    this.setState({ isInputFocused: false });

    if (event && this.props.onBlur) {
      const value = convertInputValue(event.target.value, this.props.type);

      this.setState({ value });
      this.props.onBlur(event, value);
    }
  }

  public render() {
    return getRenderedTextInput.call(this, this.state.value);
  }
}
