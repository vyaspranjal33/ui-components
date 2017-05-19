// @flow
import React from 'react';
import cx from 'classnames';

type ButtonType = 'primary' | 'secondary' | 'danger';

export type ButtonProps = {
  children?: string,
  disabled?: boolean,
  loading?: boolean,
  badge?: ?number,
  small?: boolean,
  onDark?: boolean,
  type: ButtonType,
  onClick: Function,
};

const Button = ({
  children,
  type,
  badge,
  disabled,
  loading,
  small,
  onDark,
  onClick,
}: ButtonProps) => {
  const hasBadge: boolean = !!badge || badge === 0;
  return (
    <button
      className={cx('btn', `btn-${type}`, {
        'is-disabled': disabled,
        'is-loading': loading,
        'has-badge': hasBadge,
        'btn-small': small,
        'btn-on-dark': onDark,
      })}
      onClick={onClick}
    >
      {hasBadge && <span className="badge">{badge}</span>}
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
};

export default Button;
