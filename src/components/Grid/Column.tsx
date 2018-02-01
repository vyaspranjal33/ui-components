import React from 'react';
import cn from '../../utilities/classnames';

export interface ColumnProps {
  children?: React.ReactNode;
  width?: string;
  offset?: string;
}

export const Column: React.SFC<ColumnProps> = ({
  children,
  width = '12',
  offset = '0',
}) => {
  const colWidth = 'col-' + width;
  const colOffset = 'col-offset-' + offset;

  return (
    <div
      className={cn(colWidth, colOffset)}
    >
      {children}
    </div>
  );
};

export default Column;
