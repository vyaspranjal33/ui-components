import * as React from 'react';

export interface OptGroupProps {
  label: string;
  children: Array<React.ReactElement<OptionProps>> | React.ReactElement<OptionProps>;
}

export const OptGroup: React.SFC<OptGroupProps> = ({ label, children }) => (
  <optgroup label={label}>
    {children}
  </optgroup>
);

export interface OptionProps {
  disabled?: boolean;
  value?: string | number;
  children?: string | number;
}

export const Option: React.SFC<OptionProps> = ({ value, children, disabled }) => {
  if (!value && !children) return <option />;

  return (
    <option
      disabled={disabled}
      value={value || children}>
        {children}
    </option>
  );
};
