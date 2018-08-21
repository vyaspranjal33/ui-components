/// <reference types="react" />
import React, { Component } from 'react';
import { SGLibraryImage } from './image-library';
export interface ImageLibraryDetailsPaneProps {
    alert?: React.ReactNode;
    dateFormatter: (utcMillis: number) => string;
    image: SGLibraryImage;
    onClose: (image?: SGLibraryImage) => void;
    renderActions: (image?: SGLibraryImage, closeDetailsPane?: () => void) => React.ReactNode;
}
export declare class ImageLibraryDetailsPane extends Component<ImageLibraryDetailsPaneProps> {
    render(): JSX.Element;
    private onClose;
}
export default ImageLibraryDetailsPane;
