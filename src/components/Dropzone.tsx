import * as cn from 'classnames';
import * as React from 'react';

import Alert from './Alert';
import { AlertProps } from './Alert';

export interface DropzoneProps {
  active?: boolean;
  hovered?: boolean;
  large?: boolean;
  children?: React.ReactElement<AlertProps>;
}

const Dropzone: React.SFC<DropzoneProps> = ({
  active,
  children: alert,
  hovered,
  large,
}) => {
  return (
    <div
      className={cn('dropzone', {
        'has-inline-alert': !!alert,
        'is-active': active,
        'is-hovered': hovered,
        'is-large': large,
      })}
    >
      {alert &&
        React.cloneElement(alert, {
          ...alert.props,
          inline: true,
        })}
    </div>
  );
};

Dropzone.defaultProps = {
  active: false,
  hovered: false,
  large: false,
};

export default Dropzone;
