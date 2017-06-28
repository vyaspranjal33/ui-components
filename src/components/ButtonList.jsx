// @flow
import React, { Children } from 'react';
import Button from './Button';

export type ButtonListProps = {
  children?: Button[] | ?Button,
};

const ButtonList = ({ children }: ButtonListProps) => {
  const buttons = Children.map(children, ({ props }) =>
    <Button {...props} group />,
  );
  return (
    <div className="btn-list">
      {buttons}
    </div>
  );
};

ButtonList.defaultProps = {
  children: null,
};

export default ButtonList;
