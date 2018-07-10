import React from 'react';
export interface SwitchProps {
    className?: string;
    disabled?: boolean;
    id: string;
    offText?: string;
    on: boolean;
    onText?: string;
    onChange: (event: any) => void;
    value?: string;
}
export declare const Switch: React.SFC<SwitchProps>;
export default Switch;
