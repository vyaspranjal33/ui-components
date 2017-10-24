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
    <section
      className={cn('dropzone', {
        'has-inline-alert': !!alert,
        'is-active': active,
        'is-hovered': hovered,
        'is-large': large,
      })}
      role="hidden"
    >
      {alert &&
        React.cloneElement(alert, {
          ...alert.props,
          inline: true,
        })}
    </section>
  );
};

Dropzone.defaultProps = {
  active: false,
  hovered: false,
  large: false,
};

export default Dropzone;
