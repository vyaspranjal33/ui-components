/// <reference types="react" />
import React from 'react';
export interface BannerMessageProps {
    className?: string;
    type: 'beta' | 'info';
}
declare const BannerMessage: React.SFC<BannerMessageProps>;
export default BannerMessage;
