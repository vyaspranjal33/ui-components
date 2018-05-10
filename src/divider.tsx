import React from 'react';
import cn from './utilities/classnames';

export interface DividerProps {
  label?: string;
  thin?: boolean;
}

export const Divider: React.SFC<DividerProps> = ({ label, thin, ...primitiveProps }) => {
  return (
    <hr
      className={cn({
        'has-label': !!label,
        'is-thin': thin,
      })}
      data-label={label}
      {...primitiveProps}
    />
  );
};

Divider.defaultProps = {
  label: null,
  thin: false,
};

export default Divider;
