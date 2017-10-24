import * as cn from 'classnames';
import * as React from 'react';

import { IconType } from '../types/icons';
import Icon from './Icon';

export interface NeedHelpFooterProps {
  children?:
    | Array<React.ReactElement<any>|string>
    | React.ReactElement<any>
    | string;
}

const NeedHelpFooter: React.SFC<NeedHelpFooterProps> = ({
  children,
}) => (
  <Footer>
    <Icon type='help'></Icon>
    { ' ' }
    <strong>
      Need help?
    </strong>
    { ' ' }
    {children}
  </Footer>
);

export interface FooterProps {
  children?: any;
}

const Footer: React.SFC<FooterProps> = ({
  children,
}) => (
  <footer className='small is-center'>
    {children}
  </footer>
);

export default NeedHelpFooter;
export { NeedHelpFooter };
