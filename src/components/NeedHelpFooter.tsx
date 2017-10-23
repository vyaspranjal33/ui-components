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
  <footer className='small is-center'>
    <Icon type='help'></Icon>
    { ' ' }
    <strong>
      Need help?
    </strong>
    { ' ' }
    {children}
  </footer>
);

export default NeedHelpFooter;
