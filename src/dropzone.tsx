import React from 'react';
import Alert from './alert';
import { AlertProps } from './alert';
import cn from './utilities/classnames';

export interface DropzoneProps {
  active?: boolean;
  alert?: React.ReactElement<AlertProps>;
  children?: string | React.ReactElement<any>;
  className?: string;
  hovered?: boolean;
  large?: boolean;
  onDragEnd?: (event: any) => void;
  onDragLeave?: (event: any) => void;
  onDragOver?: (event: any) => void;
  onDrop?: (event: any) => void;
}

const dropzoneStyle = {
  alignItems: 'center',
  display: 'flex',
  fontSize: '14px',
  justifyContent: 'center',
};

export const Dropzone: React.SFC<DropzoneProps> = ({
  active,
  alert,
  hovered,
  large,
  children,
  className,
  onDragOver,
  onDragLeave,
  onDragEnd,
  onDrop,
  ...attributes
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
      style={dropzoneStyle}
      {...attributes}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
    >
      {children}
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
