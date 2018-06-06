import React from 'react';
import Badge from './badge';
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
  };

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
        className: `${link.props.className} dropdown-link`,
      });
    });

    return (
      <div className={Styles['btn-list']}>
        <div
          className={cn(
            btnStyles.btn,
            Styles['btn-dropdown'],
            Styles.dropdown,
            Styles[`btn-${buttonType}`],
            {
              [Styles['btn-dropdown-gear']]: gear,
              [Styles['btn-on-dark']]: onDark,
              [Styles['btn-small']]: small,
              [Styles['has-badge']]: hasBadge,
              [Styles['has-icon']]: hasIcon || loading,
              [Styles['is-active']]: active,
              [Styles['is-disabled']]: disabled,
              [Styles['is-loading']]: loading,
            },
            className
          )}
          onClick={this.handleClick}
          {...attributes}
        >
          {!gear && hasBadge && <Badge>{badge}</Badge>}
          {!gear && hasIcon && <Icon type={icon} onDark={type === 'primary'} />}
          {gear ? <Icon type={icon || 'gear'} /> : label}
          <ul className={Styles['dropdown-menu']}>{links}</ul>
        </div>
      </div>
    );
  }
}

export default DropdownButton;
