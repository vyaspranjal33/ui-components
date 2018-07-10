import React from 'react';
export interface SortableTableProps {
    children?: React.ReactNode;
    className?: string;
    rowData?: Array<object>;
    rowRenderer?: React.SFC<any>;
    headerData?: Array<HeaderData>;
    headerRenderer?: React.SFC<any>;
}
export interface HeaderData {
    name: string;
    dataKey: string;
    sort?: (rowData: Array<object>, dataKey: string) => Array<object>;
}
export interface SortableTableState {
    data?: Array<object>;
    sortBy?: string;
    ascending?: boolean;
}
export declare class SortableTable extends React.Component<SortableTableProps> {
    readonly state: SortableTableState;
    constructor(props: SortableTableProps);
    componentDidMount(): void;
    handleHeaderClick(dataKey: string, descending: boolean): void;
    sortData(sortBy: string, descending: boolean): void;
    render(): JSX.Element;
    private performSort;
    private defaultSort;
}
export default SortableTable;
