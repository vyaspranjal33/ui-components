import React from 'react';
import cn from '../utilities/classnames';
import Badge from './Badge';
import { Button, ButtonProps } from './Button';
import Icon from './Icon';

export interface DropdownButtonProps {
  children?: any;
  label?: string;
  gear?: boolean;
}

export interface DropdownButtonState {
  active: boolean;
}

const { map } = React.Children;

export class DropdownButton extends React.Component<
  DropdownButtonProps & ButtonProps,
  DropdownButtonState
> {
  public static defaultProps = Button.defaultProps;

  public state = {
    active: false,
  };

  public handleClick = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  public render() {
    const {
      children,
      type,
      badge,
      disabled,
      loading,
      small,
      gear,
      onDark,
      onClick,
      group,
      icon,
      label,
    } = this.props;
    const { active } = this.state;
    const hasBadge: boolean = !!badge || badge === 0;
    const hasIcon: boolean = !!icon;

    const links = map(children, (link: React.ReactElement<any>) => {
      return React.cloneElement(link, {
        className: `${link.props.className} dropdown-link`,
      });
    });

    return (
      <div className="btn-list">
        <div
          className={cn('btn', 'btn-dropdown', 'dropdown', `btn-${type}`, {
            'btn-dropdown-gear': gear,
            'btn-on-dark': onDark,
            'btn-small': small,
            'has-badge': hasBadge,
            'has-icon': hasIcon || loading,
            'is-active': active,
            'is-disabled': disabled,
            'is-loading': loading,
          })}
          onClick={this.handleClick}
        >
          {!gear && hasBadge && <Badge>{badge}</Badge>}
          {!gear && hasIcon && <Icon type={icon} />}
          {gear ? <Icon type="gear" /> : label}
          <ul className="dropdown-menu">{links}</ul>
        </div>
      </div>
    );
  }
}

export default DropdownButton;
