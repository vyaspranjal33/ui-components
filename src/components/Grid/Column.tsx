import React from 'react';
import cn from '../../utilities/classnames';

export interface ColumnProps {
  children?: React.ReactNode;
  width?: number;
  offset?: number;
}

export const Column: React.SFC<ColumnProps> = ({
  children,
  width = 12,
  offset = 0,
}) => {
  const colWidth = 'col-' + width.toString();
  const colOffset = 'col-offset-' + offset.toString();

  return (
    <div
      className={cn(colWidth, colOffset)}
    >
      {children}
    </div>
  );
};

export default Column;
