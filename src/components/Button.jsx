// @flow
import React from 'react';
import cx from 'classnames';
import { StandardLoader } from './Loader';

type ButtonType = 'primary' | 'secondary' | 'danger';

export type ButtonProps = {
  children?: string,
  disabled?: boolean,
  loading?: boolean,
  badge?: ?number | StandardLoader,
  small?: boolean,
  icon?: ?React.Element<*>,
  onDark?: boolean,
  type: ButtonType,
  onClick: Function,
  group?: boolean,
  active?: boolean,
};

const Button = ({
  children,
  type,
  badge,
  disabled,
  loading,
  small,
  icon,
  onDark,
  onClick,
  group,
  active,
}: ButtonProps) => {
  const hasBadge: boolean = !!badge || badge === 0;
  const hasIcon: boolean = !!icon;
  return (
    <button
      className={cx('btn', `btn-${type}`, {
        'is-disabled': disabled,
        'is-loading': loading,
        'has-badge': hasBadge,
        'btn-small': small,
        'btn-on-dark': onDark,
        'has-icon': hasIcon,
        'btn-group-item': group,
        'is-active': active,
      })}
      onClick={onClick}
    >
      {hasBadge && <span className="badge">{badge}</span>}
      {hasIcon && icon}
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button Text',
  disabled: false,
  loading: false,
  small: false,
  onDark: false,
  badge: null,
  icon: null,
  group: false,
  active: false,
};

export default Button;
