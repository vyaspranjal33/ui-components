import React from 'react';

export interface CheckboxProps {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label?: string;
  children?: any;
  onChange: (event: any) => void;
  value?: string;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  checked,
  disabled,
  id,
  label,
  children,
  onChange,
  value,
}) => {
  return (
    <div className="input-checkbox-wrap">
      <input
        checked={checked}
        disabled={disabled}
        id={id}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <label className="input-checkbox-label" htmlFor={id}>
        {children ? children : label}
      </label>
    </div>
  );
};

export default Checkbox;
