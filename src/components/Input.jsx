// @flow
import React from 'react';
import nextId from '../utilities/next-id';

type inputValue = string | number;

type InputProps = {
  value: inputValue,
  label?: ?string,
};

export const getValueType = (value: inputValue): string => {
  if (typeof value === 'number') return 'number';
  return 'text';
};

const Input = ({ value, label }: InputProps) => {
  const valueType: string = getValueType(value);
  const id = label && `element-${nextId()}`;
  const input = <input value={value} type={valueType} id={id} />;

  if (!label) return input;
};

export default Input;
