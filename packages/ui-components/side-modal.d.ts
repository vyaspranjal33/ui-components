<<<<<<< HEAD
/// <reference types="react" />
import React from 'react';
import { ModalProps } from './utilities/modals';
export interface SideModalProps extends ModalProps {
    children?: React.ReactNode;
    onClose: (evt: any) => void;
}
export declare class SideModal extends React.Component<SideModalProps> {
    static defaultProps: Partial<SideModalProps>;
    componentWillReceiveProps(nextProps: SideModalProps): void;
    render(): JSX.Element;
}
export default SideModal;
=======
/// <reference types="react" />
import React from 'react';
import { ModalProps } from './utilities/modals';
export interface SideModalProps extends ModalProps {
    children?: React.ReactNode;
    modalContainer?: Element;
    onClose: (evt: any) => void;
}
export declare class SideModal extends React.Component<SideModalProps> {
    static defaultProps: Partial<SideModalProps>;
    componentWillReceiveProps(nextProps: SideModalProps): void;
    render(): React.ReactPortal;
}
export default SideModal;
>>>>>>> 3847efcccf5ebca2e4dc3a3fe5bf8592837f3bf0
