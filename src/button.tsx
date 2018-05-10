import React from 'react';
import Badge from './badge';
import Icon from './icon';
import Loader from './loader';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export type ButtonType = 'primary' | 'secondary' | 'danger' | 'group-item';

export interface AllButtonProps {
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
  id?: string;
  isLink?: boolean;
  className?: string;
}

export interface ButtonProps extends AllButtonProps {
  children?: string | React.ReactNode;
  isSubmit?: boolean;
  isReset?: boolean;
}

export interface ButtonizedProps extends AllButtonProps {
  children?: React.ReactElement<ButtonProps>;
}

export const Button: React.SFC<ButtonProps> = (props) => {
  let btnType = 'button';
  if (props.isSubmit) {
    btnType = 'submit';
  } else if (props.isReset) {
    btnType = 'reset';
  }
  return (
    <Buttonized {...props} >
      <button type={btnType}>
        {props.children}
      </button>
    </Buttonized>
  );
};

export const Buttonized: React.SFC<ButtonizedProps> = ({
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
  id,
  className,
  ...passThroughProps,
}) => {
  const hasBadge: boolean = !!badge || badge === 0;
  const hasIcon: boolean = !!icon;
  const content: any[] = [];

  if (hasBadge) {
    content.push(
      <Badge key={1}>{badge}</Badge>,
    );
  }

  if (hasIcon) {
    content.push(
      <Icon key={2} type={icon} />,
    );
  }

  if (loading) {
    content.push(
      <Loader key={3} small onDark={type === 'primary'} />,
    );
  }

  // the children of the element being buttonized
  if (children.props.children) {
    content.push(
      children.props.children,
    );
  }

  return (
    React.cloneElement(
      children,
      {
        className: cn('btn', `btn-${type}`, className, {
          'btn-on-dark': onDark,
          'btn-small': small,
          'has-badge': hasBadge,
          'has-icon': hasIcon || loading,
          'is-active': active,
          'is-disabled': disabled,
          'is-loading': loading,
        }),
        id,
        onClick,
        ...passThroughProps,
      },
      content,
    )
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
  type: 'primary',
};

export default Button;
