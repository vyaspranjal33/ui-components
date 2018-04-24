/// <reference types="react" />
import React, { Component } from 'react';
import { IconType } from './types/Icons';
import { ModalProps } from './utilities/modals';
export interface ConfirmationModalProps extends ModalProps {
    renderActions: string | (() => React.ReactNode);
    renderBody: string | (() => React.ReactNode);
    renderHeader: string | (() => React.ReactNode);
    iconType?: IconType;
}
export declare class ConfirmationModal extends Component<ConfirmationModalProps> {
    static defaultProps: Partial<ConfirmationModalProps>;
    componentWillReceiveProps(nextProps: ConfirmationModalProps): void;
    render(): React.ReactPortal;
}
export default ConfirmationModal;
