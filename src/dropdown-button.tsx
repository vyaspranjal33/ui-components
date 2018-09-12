import React from 'react';
import Badge from './badges/badge';
import { Button, ButtonProps, ButtonType } from './button';
import Icon from './icon';
import btnStyles from './styles/button.module.scss';
import Styles from './styles/dropdown.module.scss';
import cn from './utilities/classnames';

export interface DropdownButtonProps {
  children?: any;
  label?: string;
  gear?: boolean;
  className?: string;
}

export interface DropdownButtonState {
  active: boolean;
  menuOffset: number;
}

const { map } = React.Children;

export class DropdownButton extends React.Component<
  DropdownButtonProps & ButtonProps,
  DropdownButtonState
> {
  public static defaultProps = Button.defaultProps;

  public dropdownElement: HTMLDivElement;

  public state = {
    active: false,
    menuOffset: 0,
  };

  public componentWillUnmount() {
    document.removeEventListener('click', this.dismissDropdown);
  }

  public render() {
    const {
      active,
      badge,
      children,
      disabled,
      gear,
      group,
      icon,
      label,
      loading,
      onClick,
      onDark,
      small,
      type,
      className,
      ...attributes
    } = this.props;
    const isActive = this.state.active;
    const hasBadge: boolean = !!badge || badge === 0;
    const hasIcon: boolean = !!icon;

    let buttonType: ButtonType = type;
    if (gear) {
      buttonType = 'secondary';
    }
    if (gear && icon) {
      buttonType = 'group-item';
    }

    const links = map(children, (link: React.ReactElement<any>) => {
      return React.cloneElement(link, {
        className: cn(
          link.props.className,
          'dropdown-link',
          Styles['dropdown-link']
        ),
      });
    });

    return (
      <div className={cn('btn-list', btnStyles['btn-list'])}>
        <div
          className={cn(
            'btn',
            btnStyles.btn,
            btnStyles['btn-dropdown'],
            'btn-dropdown',
            'dropdown',
            Styles.dropdown,
            `btn-${buttonType}`,
            btnStyles[`btn-${buttonType}`],
            {
              [btnStyles['btn-dropdown-gear']]: gear && !icon,
              'btn-dropdown-gear': gear && !icon,
              [btnStyles['btn-on-dark']]: onDark,
              'btn-on-dark': onDark,
              [btnStyles['btn-small']]: small,
              'btn-small': small,
              [btnStyles['has-badge']]: hasBadge,
              'has-badge': hasBadge,
              [Styles['has-badge']]: hasBadge,
              [Styles['has-icon']]: hasIcon || loading,
              'has-icon': hasIcon || loading,
              [btnStyles['is-active']]: isActive,
              'is-active': isActive,
              [Styles['is-active']]: isActive,
              [btnStyles['has-icon']]: hasIcon || loading,
              [btnStyles['is-disabled']]: disabled,
              'is-disabled': disabled,
              [btnStyles['is-loading']]: loading,
              'is-loading': loading,
            },
            className
          )}
          onClick={this.toggleDropdown}
          ref={node => (this.dropdownElement = node)}
          {...attributes}
        >
          {!gear && hasBadge && <Badge>{badge}</Badge>}
          {!gear && hasIcon && <Icon type={icon} onDark={type === 'primary'} />}
          {gear ? (
            <Icon
              className={cn('sg-icon', btnStyles['sg-icon'])}
              type={icon || 'gear'}
            />
          ) : (
            label
          )}
          <ul
            className={cn('dropdown-menu', Styles['dropdown-menu'])}
            style={{ transform: `translate(${this.state.menuOffset}px)` }}
          >
            {links}
          </ul>
        </div>
      </div>
    );
  }

  private toggleDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    const { active: isActive } = this.state;

    let menuOffset = 0;

    const minimumDropdownWidth = 180;
    const windowWidth = window.innerWidth;
    const buttonWidth = this.dropdownElement.offsetWidth;
    const bounding = this.dropdownElement.getBoundingClientRect() as DOMRect;

    if (bounding.x + minimumDropdownWidth > windowWidth) {
      menuOffset = -(minimumDropdownWidth - buttonWidth);
    }

    return this.setState({ active: !isActive, menuOffset }, () => {
      if (this.state.active) {
        document.addEventListener('click', this.dismissDropdown, false);
      }
    });
  };

  private dismissDropdown = () => {
    this.setState({ active: false });
    document.removeEventListener('click', this.dismissDropdown, false);
  };
}

export default DropdownButton;
