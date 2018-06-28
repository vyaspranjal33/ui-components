import React from 'react';
import Checkbox from '../checkbox';
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
      className={cn(Styles['switch-toggle'], className, {
        [Styles['is-disabled']]: disabled,
      })}
    >
      <input
        checked={on}
        className={Styles['switch-checkbox']}
        disabled={disabled}
        id={id}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <label className={Styles['switch-label']} htmlFor={id}>
        <div
          className={cn(Styles['switch-option'], Styles['switch-option-off'])}
        >
          {offText}
        </div>
        <div
          className={cn(Styles['switch-option'], Styles['switch-option-on'])}
        >
          {onText}
        </div>
      </label>
      <div className={Styles['switch-selector']} />
    </div>
  );
};

Switch.defaultProps = {
  offText: 'off',
  onText: 'on',
  value: '',
};

export default Switch;
