<<<<<<< HEAD
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
=======
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
    componentWillReceiveProps(nextProps: ConfirmationModalProps): void;
    render(): React.ReactPortal;
}
export default ConfirmationModal;
>>>>>>> 3847efcccf5ebca2e4dc3a3fe5bf8592837f3bf0
