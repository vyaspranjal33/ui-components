// @flow
import React from 'react';
import type Button from './Button';

export type ButtonListProps = {
  children?: Button[] | ?Button,
};

const ButtonList = ({ children }: ButtonListProps) => (
  <div className="btn-list">
    {children}
  </div>
);

ButtonList.defaultProps = {
  children: null,
};

export default ButtonList;
