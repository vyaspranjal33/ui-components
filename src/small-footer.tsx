import React from 'react';
import cn from './utilities/classnames';

import Icon from './icon';
import { IconType } from './types/icons';

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
  ...passThroughProps,
}) => (
  <p className="small is-center" {...passThroughProps}>
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
  </p>
);

export default Footer;
