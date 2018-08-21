import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HTMLInputElementProps, TextInput, TextInputProps } from './text-input';
import { InputType } from './types/inputs';
import { Units } from './types/units';
import { Omit } from './types/utils';

export type OmittedProps = 'type' | 'units' | 'placeholder' | 'max';
export type PercentInputProps = Omit<
  TextInputProps & HTMLInputElementProps,
  OmittedProps
>;
export class PercentInput extends React.Component<PercentInputProps> {
  public onValueChange = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): any => {
    // Have to use `undefined` in order to show the AUTO placeholder
    // Other falsey values show a 0.
    let value;
    if (event.currentTarget.value.length) {
      value = Number(event.currentTarget.value);
    } else {
      value = undefined;
    }
    if (value < 0 || event.currentTarget.value === '-0') {
      value = undefined;
    }
    if (value > 100) {
      value = 100;
    }

    this.props.onChange(event, value);
  };

  public render() {
    return (
      <TextInput
        {...this.props}
        onChange={this.onValueChange}
        max={100}
        placeholder={'AUTO'}
        type="number"
        units="%"
      />
    );
  }
}

export default PercentInput;
