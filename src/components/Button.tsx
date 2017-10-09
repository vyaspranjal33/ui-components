import * as cn from 'classnames';
import * as React from 'react';
import { IconType } from '../types/icons';
import Badge from './Badge';
import Icon from './Icon';
import Loader from './Loader';

export type ButtonType = 'primary' | 'secondary' | 'danger' | 'group-item';

export interface ButtonProps {
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
}

export const Button: React.SFC<ButtonProps> = ({
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
        'btn-on-dark': onDark,
        'btn-small': small,
        'has-badge': hasBadge,
        'has-icon': hasIcon || loading,
        'is-active': active,
        'is-disabled': disabled,
        'is-loading': loading,
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
  active: false,
  badge: null,
  children: '',
  disabled: false,
  group: false,
  icon: null,
  loading: false,
  onClick: () => {},
  onDark: false,
  small: false,
  type: 'secondary',
};

export default Button;
