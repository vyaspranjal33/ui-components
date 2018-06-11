import React from 'react';
import Checkbox from '../checkbox';
import cn from '../utilities/classnames';

export interface SwitchProps {
  className?: string;
  id: string;
  isDisabled?: boolean;
  isOn: boolean;
  offText?: string;
  onText?: string;
  onChange: (event: any) => void;
  value?: string;
}

export const Switch: React.SFC<SwitchProps> = ({
  className,
  id,
  isDisabled,
  isOn,
  offText,
  onText,
  onChange,
  value,
}) => {
  return (
    <div
      className={cn('switch', className, {
        'is-disabled': isDisabled,
      })}
    >
      <input
        checked={isOn}
        className="switch-checkbox"
        disabled={isDisabled}
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
