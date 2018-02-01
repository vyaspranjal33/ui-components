import React from 'react';
import cn from '../../utilities/classnames';

export interface RowProps {
  children?: React.ReactElement<any>;
}

export const Row: React.SFC<RowProps> = ({
  children,
}) => {
  return (
    <div
      className={cn('row')}
    >
      {children}
    </div>
  );
};

export default Row;
