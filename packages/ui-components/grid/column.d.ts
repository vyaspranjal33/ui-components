import React from 'react';
export interface ColumnProps {
    children?: React.ReactNode;
    width?: number;
    offset?: number;
}
export declare const Column: React.SFC<ColumnProps>;
export default Column;
