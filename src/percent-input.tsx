import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
import Styles from './styles/center-modal.module.scss';
import cn from './utilities/classnames';
import { ModalProps, modalWillReceiveProps } from './utilities/modals';

export interface PercentInputProps {
  onChange: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: number;
}

const evaluateRenderProp: (
  prop: string | React.ReactNode | (() => React.ReactNode)
) => React.ReactNode = prop => {
  return prop instanceof Function ? prop() : prop;
};

export class PercentInput extends Component<
  PercentInputProps & React.InputHTMLAttributes<HTMLInputElement>
> {
  public render() {
    const { value, onChange, ...attributes } = this.props;
    return (
      <input
        type="number"
        onChange={onChange}
        max={100}
        value={value}
        placeholder="AUTO"
        {...attributes}
      />
    );
  }
}

export default PercentInput;
