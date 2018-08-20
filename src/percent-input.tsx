import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  HTMLInputElementProps,
  StatefulTextInput,
  TextInputProps,
} from './text-input';
import { InputType } from './types/inputs';
import { Units } from './types/units';
import { Omit } from './types/utils';

export type OmittedProps = 'type' | 'units' | 'placeholder' | 'max';
export class PercentInput extends StatefulTextInput<OmittedProps> {
  public static defaultProps: Partial<
    TextInputProps & HTMLInputElementProps
  > = {
    max: 100,
    placeholder: 'AUTO',
    type: 'number',
    units: '%',
  };
  public onValueChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value.length
      ? Number(event.currentTarget.value)
      : undefined;
    value =
      value < 0 || event.currentTarget.value === '-0'
        ? undefined
        : value > 100
          ? 100
          : value;

    this.setState({ value });
    this.props.onChange(event, value);
  };
}

export default PercentInput;
