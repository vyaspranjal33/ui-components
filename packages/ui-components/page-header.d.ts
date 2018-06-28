import React from 'react';
export interface PageHeaderProps {
    children?: React.ReactNode;
}
export interface PageHeadingProps {
    children?: React.ReactNode;
    title?: string | number;
    className?: string;
}
export declare const PageHeader: React.SFC<PageHeaderProps>;
export declare const PageHeading: React.SFC<PageHeadingProps>;
export default PageHeader;
