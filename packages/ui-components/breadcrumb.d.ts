/// <reference types="react" />
import React from 'react';
export interface BreadcrumbProps {
    children: Array<React.ReactElement<ChildProps>> | React.ReactElement<ChildProps>;
    withoutTrailingSlash?: boolean;
}
export interface ChildProps {
    to?: string;
    href?: string;
}
export declare const Breadcrumb: React.SFC<BreadcrumbProps>;
export default Breadcrumb;
