/// <reference types="react" />
import React from 'react';
export interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    id: string;
    label: string;
    onChange: (event: any) => void;
    value?: string;
}
export declare const Checkbox: React.SFC<CheckboxProps>;
export default Checkbox;
