import * as cn from 'classnames';
import * as React from 'react';

import { IconType } from '../types/icons';

export interface NeedHelpFooterProps {
  children?: any;
}

export const NeedHelpFooter: React.SFC<NeedHelpFooterProps> = ({
  children,
}) => (
  <p className="small is-center">
    <i className="sg-icon sg-icon-help"></i>
    <strong>
      Need help?
    </strong>
    { " " }
    {children}
  </p>
);
