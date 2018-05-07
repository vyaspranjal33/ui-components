import React from 'react';
import Alert from './alert';
import { AlertProps } from './alert';
import Styles from './styles/dropzone.module.scss';
import cn from './utilities/classnames';

export interface DropzoneProps {
  active?: boolean;
  hovered?: boolean;
  large?: boolean;
  children?: React.ReactElement<AlertProps>;
}

export const Dropzone: React.SFC<DropzoneProps> = ({
  active,
  children: alert,
  hovered,
  large,
}) => {
  return (
    <section
      className={cn(Styles.dropzone, {
        [Styles['has-inline-alert']]: !!alert,
        [Styles['is-active']]: active,
        [Styles['is-hovered']]: hovered,
        [Styles['is-large']]: large,
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
