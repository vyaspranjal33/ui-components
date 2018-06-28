import React from 'react';
export interface BreadcrumbProps {
    children: Array<React.ReactElement<ChildProps>> | React.ReactElement<ChildProps>;
    withoutTrailingSlash?: boolean;
    className?: string;
}
export interface ChildProps {
    to?: string;
    href?: string;
}
export declare const Breadcrumb: React.SFC<BreadcrumbProps>;
export default Breadcrumb;
