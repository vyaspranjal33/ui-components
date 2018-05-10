import React from 'react';
import cn from './utilities/classnames';

export interface DividerProps {
  label?: string;
  thin?: boolean;
  className?: string;
}

export const Divider: React.SFC<DividerProps> = ({ label, thin, className, ...passThroughProps }) => {
  return (
    <hr
      className={cn(className, {
        'has-label': !!label,
        'is-thin': thin,
      })}
      data-label={label}
      {...passThroughProps}
    />
  );
};

Divider.defaultProps = {
  label: null,
  thin: false,
};

export default Divider;
