import React from 'react';
import Alert from './alert';
import { AlertProps } from './alert';
import cn from './utilities/classnames';

export interface DropzoneProps {
  active?: boolean;
  hovered?: boolean;
  large?: boolean;
  children?: React.ReactElement<AlertProps>;
  className?: string;
}

export const Dropzone: React.SFC<DropzoneProps> = ({
  active,
  children: alert,
  hovered,
  large,
  className,
  ...attributes,
}) => {
  return (
    <section
      className={cn('dropzone', className, {
        'has-inline-alert': !!alert,
        'is-active': active,
        'is-hovered': hovered,
        'is-large': large,
      })}
      role="hidden"
      {...attributes}
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
