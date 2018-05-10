/// <reference types="react" />
import React, { Component } from 'react';
import { IconType } from './types/icons';
import { ModalProps } from './utilities/modals';
export interface ConfirmationModalProps extends ModalProps {
    iconType?: IconType;
    modalContainer?: Element;
    renderActions: string | (() => React.ReactNode);
    renderBody: string | (() => React.ReactNode);
    renderHeader: string | (() => React.ReactNode);
}
export declare class ConfirmationModal extends Component<ConfirmationModalProps> {
    static defaultProps: Partial<ConfirmationModalProps>;
    private primitiveProps;
    constructor(props: ConfirmationModalProps);
    componentWillReceiveProps(nextProps: ConfirmationModalProps): void;
    render(): React.ReactPortal;
}
export default ConfirmationModal;
