import React from 'react';
import Checkbox from '../checkboxes/checkbox';
import Styles from '../styles/switches.module.scss';
import cn from '../utilities/classnames';

export interface SwitchProps {
  className?: string;
  disabled?: boolean;
  id: string;
  offText?: string;
  on: boolean;
  onText?: string;
  onChange: (event: any) => void;
  value?: string;
}

export const Switch: React.SFC<SwitchProps> = ({
  className,
  disabled,
  id,
  offText,
  on,
  onText,
  onChange,
  value,
}) => {
  return (
    <div
      className={cn('switch-toggle', Styles['switch-toggle'], className, {
        [Styles['is-disabled']]: disabled,
        'is-disabled': disabled,
      })}
    >
      <input
        checked={on}
        className={cn('switch-checkbox', Styles['switch-checkbox'])}
        disabled={disabled}
        id={id}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <label
        className={cn('switch-label', Styles['switch-label'])}
        htmlFor={id}
      >
        <div
          className={cn(
            'switch-option',
            Styles['switch-option'],
            'switch-option-off',
            Styles['switch-option-off']
          )}
        >
          {offText}
        </div>
        <div
          className={cn(
            'switch-option',
            Styles['switch-option'],
            'switch-option-on',
            Styles['switch-option-on']
          )}
        >
          {onText}
        </div>
      </label>
      <div className={cn('switch-selector', Styles['switch-selector'])} />
    </div>
  );
};

Switch.defaultProps = {
  offText: 'off',
  onText: 'on',
  value: '',
};

export default Switch;
