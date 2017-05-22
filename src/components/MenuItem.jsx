// @flow
import React from 'react';
import cn from 'classnames';

const MenuItem = ({ children }: { children?: any }) => (
  <li><a className="dropdown-link">{children}</a></li>
);

export default MenuItem;
