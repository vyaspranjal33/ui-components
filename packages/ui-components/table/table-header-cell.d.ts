import React from 'react';
export interface TableHeaderCellProps {
    children?: React.ReactNode;
    className?: string;
    sortKey?: string;
    onClick?: Function;
    ascending?: boolean;
    sorted?: boolean;
}
export declare class HeaderCell extends React.Component<TableHeaderCellProps> {
    constructor(props: TableHeaderCellProps);
    handleClick: () => void;
    render(): JSX.Element;
}
export default HeaderCell;
