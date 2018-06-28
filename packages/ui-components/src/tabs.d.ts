/// <reference types="react" />
import React from 'react';
export interface TabProps {
    active?: boolean;
    children: string;
    number?: number;
    onClick?: (event: any) => void;
    index?: number;
    className?: string;
}
export declare const Tab: React.SFC<TabProps>;
export interface TabsProps {
    centered?: boolean;
    zeroBorder?: boolean;
    children: any;
    onChange: (event: any, label: string, index: number) => void;
}
export declare const Tabs: React.SFC<any>;
export declare class StatefulTabs extends React.Component<TabsProps, any> {
    state: {
        activeIndex: number;
    };
    handleChange: (event: any, label: string, index: number) => void;
    render(): JSX.Element;
}
export default Tabs;
