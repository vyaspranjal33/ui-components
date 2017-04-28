// @flow
import React, { Children } from 'react';

type ButtonListProps = {
  children: Children[]
};

const ButtonList = ({ children = [] }: ButtonListProps) => (
  <div className="btn-list">
    {children}
  </div>
);

export default ButtonList;
