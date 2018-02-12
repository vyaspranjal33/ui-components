import React from 'react';

export interface TableHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const TableHeader: React.SFC<TableHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <thead className={className}>
      {children}
    </thead>
  );
};

export default TableHeader;
