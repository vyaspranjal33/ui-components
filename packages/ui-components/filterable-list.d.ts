import React, { PureComponent, ReactElement } from 'react';
export interface FilterableListContainerProps {
    clearButtonInHeader?: boolean;
    clearButtonLabel?: string;
    filterTypes?: Array<string>;
    items?: Array<any>;
    onClear?: (event?: any) => void;
    onChange?: (event?: any, value?: string | number) => void;
    onFilter?: (items: Array<any>, filters: {}) => Array<any>;
    renderControls: (filterOptions: {
        [key: string]: any;
    }, handleFilterChange?: any) => ReactElement<any>;
    renderItems: (items: Array<any>) => ReactElement<any>;
    showClearButton?: boolean;
    title: string;
}
export interface FilterableListProps extends FilterableListContainerProps {
    items: Array<any>;
    className?: string;
}
export interface FilterableListState {
    [key: string]: string;
}
export declare class FilterableList extends PureComponent<FilterableListProps, FilterableListState> {
    static defaultProps: {
        clearButtonInHeader: boolean;
        clearButtonLabel: string;
        filterTypes: string[];
        showClearButton: boolean;
    };
    static createClass(props: FilterableListContainerProps): React.ComponentClass<any>;
    state: {
        [key: string]: string;
    };
    handlers: {
        [key: string]: (filterName: string, event: any) => void;
    };
    constructor(props: FilterableListProps);
    handleFilterChange: (filterName: string, event: any) => void;
    readonly filteredItems: Array<any>;
    readonly clearButton: JSX.Element;
    readonly showClearButtonInHeader: boolean;
    readonly showClearButtonInline: boolean;
    render(): JSX.Element;
    private handleClear;
}
export default FilterableList;
