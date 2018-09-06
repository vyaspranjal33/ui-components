import React, { InputHTMLAttributes } from 'react';
import Styles from './styles/save-button.module.scss';
import cn from './utilities/classnames';

import omit from 'lodash/omit';
import Button, { ButtonProps } from './button';
import Icon from './icon';
import Loader from './loader';
export interface SaveButtonProps {
  hasIcon: boolean;
  saving: boolean;
  saved: boolean;
}

export class SaveButton extends React.Component<
  SaveButtonProps & ButtonProps & React.InputHTMLAttributes<HTMLButtonElement>
> {
  public render() {
    const onDark = this.props.onDark || this.props.type === 'primary';
    const iconType =
      this.props.hasIcon && !(this.props.saving || this.props.saved)
        ? 'save-draft'
        : null;
    return (
      <Button
        {...omit(this.props, ['hasIcon', 'saving', 'saved'])}
        icon={iconType}
        className={cn({
          'btn-save': true,
          [Styles['btn-save']]: true,
          'is-loading': this.props.saving,
          [Styles['is-loading']]: this.props.saving,
          'is-saved': this.props.saved,
          [Styles['is-saved']]: this.props.saved,
          [this.props.className]: true,
        })}
      >
        <Loader small onDark={onDark} />
        <Icon type="check" />
        <div className={Styles['btn-text']}>{this.props.children}</div>
      </Button>
    );
  }
}

export default SaveButton;
