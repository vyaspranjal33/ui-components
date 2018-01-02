import React from 'react';
import cn from '../utilities/classnames';

import { InputType } from '../types/inputs';

const convertInputVal = (value: string, inputType: InputType) => {
  return inputType === 'number' ?
    parseInt(value, 10) :
    value;
};

const onInputFocus = function() {
  this.setState({ isInputFocused: true });
};

const getRenderedTextInput = function(value?: | string | number) {
  const classes = cn('input-text-wrap', {
    'has-value': !!value || value === 0,
    'is-disabled': this.props.isDisabled,
    'is-error': !this.props.isValid,
    'is-focused': this.state.isInputFocused,
    'is-large': this.props.isLarge,
    'is-required': this.props.isRequired,
  });

  const infoId = this.props.info ? `${this.props.id}-info` :
    null;

  return (
    <div className={classes}>
      <label className="input-text-label" htmlFor={this.props.id}>
        {this.props.label}
      </label>
      <input
        id={this.props.id}
        value={value}
        type={this.props.type}
        onChange={this.onValueChange}
        onFocus={this.onInputFocus}
        onBlur={this.onInputBlur}
        aria-describedby={infoId}
      />
      { this.props.info &&
        <span
          className={cn('input-info', {
            danger: !this.props.isValid,
          })}
          id={infoId}
        >
          {this.props.info}
        </span>
      }
    </div>
  );
};

export interface TextInputProps {
  type: InputType;
  value?:
    | string
    | number;
  isValid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isLarge?: boolean;
  label?: string;
  id: string;
  info?: string;
  onChange: (event: any) => void;
  onBlur?: (event: any) => void;
}

export class TextInput extends React.Component<
  TextInputProps,
  { isInputFocused: boolean }
> {
  public static defaultProps: Partial<TextInputProps> = {
    isValid: true,
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

  public onValueChange(e: any) {
    this.props.onChange(convertInputVal(e.target.value, this.props.type));
  }
  public onInputBlur(e: any) {
    this.setState({ isInputFocused: false });

    if (e !== undefined && this.props.onBlur !== undefined) {
    this.props.onBlur(convertInputVal(e.target.value, this.props.type));
    }
  }
  public render() {
    return getRenderedTextInput.call(this, this.props.value);
  }
}

export class StatefulTextInput extends React.Component<
  TextInputProps,
  { isInputFocused: boolean, value: | string | number }
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

  public onValueChange(e: any) {
    const val = convertInputVal(e.target.value, this.props.type);

    this.setState({ value: val });
    this.props.onChange(val);
  }

  public onInputBlur(e: any) {
    this.setState({ isInputFocused: false });

    if (e !== undefined && this.props.onBlur) {
    const val = convertInputVal(e.target.value, this.props.type);
    this.setState({ value: val });
    this.props.onBlur(val);
    }
  }

  public render() {
    return getRenderedTextInput.call(this, this.state.value);
  }
}
