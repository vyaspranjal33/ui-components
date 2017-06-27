// @flow
import React from 'react';

const MenuItem = ({ children }: { children?: any }) => (
  <li><a className="dropdown-link">{children}</a></li>
);

MenuItem.defaultProps = {
  children: {},
};
export default MenuItem;
