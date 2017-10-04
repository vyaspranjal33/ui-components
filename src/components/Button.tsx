import * as React from 'react';
import * as cn from 'classnames';
import Badge from './Badge';
import Icon from './Icon';
import Loader from './Loader';
import { IconType } from '../types/icons';

export type ButtonType = 'primary' | 'secondary' | 'danger' | 'group-item';

export type ButtonProps = {
  children?: string;
  disabled?: boolean;
  loading?: boolean;
  badge?: number | string;
  small?: boolean;
  onDark?: boolean;
  type?: ButtonType;
  onClick?: (event: any) => void;
  group?: boolean;
  active?: boolean;
  icon?: IconType;
};

const Button: React.SFC<ButtonProps> = ({
  children,
  type,
  badge,
  disabled,
  loading,
  small,
  onDark,
  onClick,
  group,
  active,
  icon,
}) => {
  const hasBadge: boolean = !!badge || badge === 0;
  const hasIcon: boolean = !!icon;
  return (
    <button
      className={cn('btn', `btn-${type}`, {
        'has-badge': hasBadge,
        'has-icon': hasIcon || loading,
        'is-disabled': disabled,
        'is-loading': loading,
        'btn-on-dark': onDark,
        'is-active': active,
      })}
      onClick={onClick}
    >
      {hasBadge && <Badge>{badge}</Badge>}
      {hasIcon && <Icon type={icon} />}
      {loading && <Loader small onDark={type === 'primary'} />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: '',
  badge: null,
  disabled: false,
  loading: false,
  small: false,
  onDark: false,
  group: false,
  active: false,
  icon: null,
  type: 'secondary',
  onClick: () => {},
};

export default Button;
