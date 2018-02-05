import React from 'react';
import cn from '../../utilities/classnames';

export interface TableHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableHeader: React.SFC<TableHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <thead className={cn(className)}>
      {children}
    </thead>
  );
}

export default TableHeader;
