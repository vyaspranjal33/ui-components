import React from 'react';

export interface CheckboxProps {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  onChange: (event: any) => void;
  value?: string;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  checked,
  disabled,
  id,
  label,
  onChange,
  value,
  ...primitiveProps,
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
        {...primitiveProps}
      />
      <label className="input-checkbox-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
