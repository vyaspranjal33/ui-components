import React from 'react';
import cn from '../utilities/classnames';

export interface DividerProps {
  label?: string;
  thin?: boolean;
  hasLabel?: boolean;
}

export const Divider: React.SFC<DividerProps> = ({ hasLabel, label, thin }) => {
  return (
    <hr
      className={cn({
        'has-label': hasLabel,
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
