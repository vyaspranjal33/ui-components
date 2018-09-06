/// <reference types="react" />
import React from 'react';
import { ModalProps } from './utilities/modals';
export interface SideModalProps extends ModalProps {
    children?: React.ReactNode;
    modalContainer?: Element;
    onClose: (evt: any) => void;
    className?: string;
}
export declare class SideModal extends React.Component<SideModalProps> {
    static defaultProps: Partial<SideModalProps>;
    componentDidUpdate(prevProps: SideModalProps): void;
    render(): React.ReactPortal;
}
export default SideModal;
