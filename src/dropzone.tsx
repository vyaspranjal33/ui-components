import React from 'react';
import Alert from './alert';
import { AlertProps } from './alert';
import Styles from './styles/dropzone.module.scss';
import cn from './utilities/classnames';

export interface DropzoneProps {
  active?: boolean;
  alert?: React.ReactElement<AlertProps>;
  children?: string | React.ReactElement<any>;
  className?: string;
  hovered?: boolean;
  invalid?: boolean;
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
  invalid,
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
      className={cn('dropzone', Styles.dropzone, className, {
        [Styles['has-inline-alert']]: !!alert,
        'has-inline-alert': !!alert,
        [Styles['is-active']]: active,
        'is-active': active,
        [Styles['is-hovered']]: hovered,
        'is-hovered': hovered,
        [Styles['is-invalid']]: invalid,
        'is-invalid': invalid,
        [Styles['is-large']]: large,
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
      <div>{children}</div>
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
  invalid: false,
  large: false,
};

export default Dropzone;
