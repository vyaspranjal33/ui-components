import React from 'react';
import Checkbox from '../checkbox';
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
      className={cn('switch', className, {
        'is-disabled': disabled,
      })}
    >
      <input
        checked={on}
        className="switch-checkbox"
        disabled={disabled}
        id={id}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <label className="switch-label" htmlFor={id}>
        <div className="switch-option switch-option-off">{offText}</div>
        <div className="switch-option switch-option-on">{onText}</div>
      </label>
      <div className="switch-selector" />
    </div>
  );
};

Switch.defaultProps = {
  offText: 'off',
  onText: 'on',
  value: '',
};

export default Switch;
