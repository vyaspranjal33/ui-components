/// <reference types="react" />
import React, { Component } from 'react';
import { IconType } from './types/icons';
import { ModalProps } from './utilities/modals';
export interface ConfirmationModalProps extends ModalProps {
    iconType?: IconType;
    isOpen?: boolean;
    modalContainer?: Element;
    renderActions: string | (() => React.ReactNode);
    renderBody: string | (() => React.ReactNode);
    renderHeader: string | (() => React.ReactNode);
    className?: string;
}
export declare class ConfirmationModal extends Component<ConfirmationModalProps> {
    static defaultProps: Partial<ConfirmationModalProps>;
    componentWillReceiveProps(nextProps: ConfirmationModalProps): void;
    render(): React.ReactPortal;
}
export default ConfirmationModal;
