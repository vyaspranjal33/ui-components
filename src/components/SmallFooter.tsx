import * as cn from 'classnames';
import * as React from 'react';

import { IconType } from '../types/icons';
import Icon from './Icon';

export interface FooterProps {
  children?:
  | Array<React.ReactElement<any>|string>
  | React.ReactElement<any>
  | string;
  icon?: IconType;
  header?: string;
}

export const Footer: React.SFC<FooterProps> = ({
  children,
  icon,
  header,
}) => (
  <footer className="small is-center">
    {
      icon &&
      <span>
        <Icon type={icon} />
        {' '}
      </span>
    }
    {
      header &&
      <strong>
        {`${header} `}
      </strong>
    }
    {children}
  </footer>
);

export default Footer;
