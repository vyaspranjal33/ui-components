import React from 'react';
import cn from '../../utilities/classnames';

export interface ColumnProps {
  children?: React.ReactNode;
  width?: number;
  offset?: number;
}

export const Column: React.SFC<ColumnProps> = ({
  children,
  width,
  offset,
}) => {

  return (
    <div
      className={cn(
        (width > 0 ? 'col-' + width.toString() : ''), 
        (offset > 0 ? 'col-offset-' + offset.toString() : '')
      )}
    >
      {children}
    </div>
  );
};

export default Column;
