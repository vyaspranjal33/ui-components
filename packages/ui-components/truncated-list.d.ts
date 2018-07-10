import React from 'react';
export interface TruncatedListProps {
    items: Array<string> | Array<object>;
    limit?: number;
    className?: string;
    link?: string;
    renderItems?: (item: Array<any>) => JSX.Element;
    renderMore?: (truncatedCount: string, link: string) => JSX.Element;
}
export declare const TruncatedList: React.SFC<TruncatedListProps>;
export default TruncatedList;
