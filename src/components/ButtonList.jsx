// @flow
import React, { Children } from 'react';
import type Button from './Button';

export type ButtonListProps = {
  children?: Button[] | ?Button,
};

const ButtonList = ({ children }: ButtonListProps) => {
  const items = Children.map(children, child =>
    React.cloneElement(child, {
      group: true,
    }),
  );
  return (
    <div className="btn-list">
      {items}
    </div>
  );
};

ButtonList.defaultProps = {
  children: null,
};

export default ButtonList;
