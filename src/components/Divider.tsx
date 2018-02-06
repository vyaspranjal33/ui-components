import React from 'react';
import cn from '../utilities/classnames';

export interface DividerProps {
  label?: string;
  thin?: boolean;
}

export const Divider: React.SFC<DividerProps> = ({ label, thin }) => {
  return (
    <hr
      className={cn({
        'is-thin': thin,
      })}
      data-label={label}
    />
  );
};

Divider.defaultProps = {
  label: null,
  thin: false,
};

export default Divider;
