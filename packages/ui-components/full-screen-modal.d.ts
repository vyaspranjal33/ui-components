/// <reference types="react" />
import React, { Component } from 'react';
import { ModalProps } from './utilities/modals';
export interface FullScreenModelProps extends ModalProps {
    children?: React.ReactChildren;
    className?: string;
    isOpen?: boolean;
    onClose?: (event: any) => void;
    modalContainer?: Element;
    title: string;
}
export declare class FullscreenModal extends Component<FullScreenModelProps> {
    static defaultProps: Partial<FullScreenModelProps>;
    componentWillReceiveProps(nextProps: FullScreenModelProps): void;
    render(): React.ReactPortal;
}
export default FullscreenModal;
