/// <reference types="react" />
import React, { Component } from 'react';
import { ModalProps } from './utilities/modals';
export interface ConfirmationModalProps extends ModalProps {
    renderActions: string | (() => React.ReactNode);
    renderBody: string | (() => React.ReactNode);
    renderHeader: string | (() => React.ReactNode);
}
export declare class ConfirmationModal extends Component<ConfirmationModalProps> {
    static defaultProps: Partial<ConfirmationModalProps>;
    componentWillReceiveProps(nextProps: ConfirmationModalProps): void;
    render(): JSX.Element;
}
export default ConfirmationModal;
