import React from 'react';
import cn from '../utilities/classnames';

export interface RowProps {
  children?: React.ReactNode;
}

export const Row: React.SFC<RowProps> = ({
  children,
}) => {
  return (
    <div
      className="row"
    >
      {children}
    </div>
  );
};

export default Row;
