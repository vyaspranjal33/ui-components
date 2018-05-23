import React from 'react';
import Badge from './badge';
import Icon from './icon';
import Loader from './loader';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export type AccordionType = 'standard' | 'large' | 'is-editor';

export interface AllAccordionProps {
  disabled?: boolean;
  loading?: boolean;
  badge?: number | string;
  small?: boolean;
  onDark?: boolean;
  type?: AccordionType;
  onClick?: (event: any) => void;
  group?: boolean;
  active?: boolean;
  icon?: IconType;
  id?: string;
  isLink?: boolean;
  className?: string;
}

export interface AccordionProps extends AllAccordionProps {
  children?: string | React.ReactNode;
  isSubmit?: boolean;
  isReset?: boolean;
}

export interface AccordionizedProps extends AllAccordionProps {
  children?: React.ReactElement<AccordionProps>;
}

export const Accordion: React.SFC<AccordionProps> = (props) => {
  let btnType = 'button';
  if (props.isSubmit) {
    btnType = 'submit';
  } else if (props.isReset) {
    btnType = 'reset';
  }
  return (
    <Accordionized {...props} >
      <button type={btnType}>
        {props.children}
      </button>
    </Accordionized>
  );
};

export const Accordionized: React.SFC<AccordionizedProps> = ({
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
  ...attributes,
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
        ...attributes,
      },
      content,
    )
  );
};

Accordion.defaultProps = {
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

export default Accordion;
