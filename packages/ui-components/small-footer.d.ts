import React from 'react';
import { IconType } from './types/icons';
export interface FooterProps {
    children?: Array<React.ReactElement<any> | string> | React.ReactElement<any> | string;
    icon?: IconType;
    header?: string;
    className?: string;
}
export declare const Footer: React.SFC<FooterProps>;
export default Footer;
