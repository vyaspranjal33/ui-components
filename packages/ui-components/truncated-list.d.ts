/// <reference types="react" />
import React from 'react';
export interface TruncatedListProps {
    items: string[] | object[];
    limit?: number;
    className?: string;
    link?: string;
    renderItems?: (item: any[]) => JSX.Element;
    renderMore?: (truncatedCount: string, link: string) => JSX.Element;
}
export declare const TruncatedList: React.SFC<TruncatedListProps>;
export default TruncatedList;
