/// <reference types="react" />
import React, { PureComponent, ReactElement } from 'react';
export interface FilterableListContainerProps {
    clearButtonInHeader?: boolean;
    clearButtonLabel?: string;
    filterTypes?: string[];
    items?: any[];
    onClear?: (event?: any) => void;
    onChange?: (event?: any, value?: string | number) => void;
    onFilter?: (items: any[], filters: {}) => any[];
    renderControls: (filterOptions: {
        [key: string]: any;
    }, handleFilterChange?: any) => ReactElement<any>;
    renderItems: (items: any[]) => ReactElement<any>;
    showClearButton?: boolean;
    title: string;
}
export interface FilterableListProps extends FilterableListContainerProps {
    items: any[];
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
    private primitiveProps;
    constructor(props: FilterableListProps);
    handleFilterChange: (filterName: string, event: any) => void;
    readonly filteredItems: any[];
    readonly clearButton: JSX.Element;
    readonly showClearButtonInHeader: boolean;
    readonly showClearButtonInline: boolean;
    render(): JSX.Element;
    private handleClear;
}
export default FilterableList;
