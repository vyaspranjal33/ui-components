/// <reference types="react" />
import React, { PureComponent } from 'react';
export interface SegmentTermProps {
    hasAddButton?: boolean;
    hasSeparator?: boolean;
    isEditable?: boolean;
    isEditing?: boolean;
    label?: string;
    onAddButtonClick?: (e: any) => void;
    onCancel?: (e: any) => void;
    onConfirm?: (e: any) => void;
    onEdit?: (e: any) => void;
    queryName?: string;
    renderInputs?: () => React.ReactNode;
    showConfirm?: boolean;
    title: string;
}
export declare class SegmentTerm extends PureComponent<SegmentTermProps> {
    static defaultProps: {
        hasAddButton: boolean;
        hasSeparator: boolean;
        isEditable: boolean;
        isEditing: boolean;
    };
    readonly termControls: React.ReactNode;
    render(): JSX.Element;
}
