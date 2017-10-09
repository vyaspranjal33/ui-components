import * as React from 'react';

export interface OptionProps {
  children?: string | number;
  value?: string | number;
}

export const Option: React.SFC<OptionProps> = ({ children: label, value }) => {
  if (!label && !value) {
    return <option />;
  }
  return <option value={value || label}>{label}</option>;
};

export default Option;
