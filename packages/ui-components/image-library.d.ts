/// <reference types="react" />
import React, { Component } from 'react';
import { AlertProps } from './alert';
export interface SGLibraryImage {
    id: string;
    name: string;
    created?: number;
    originalUrl?: string;
    thumbnailUrl?: string;
    width?: number;
    height?: number;
    uploadPercent?: number;
}
export interface ImageLibraryProps {
    dateFormatter: (utcMillis: number) => string;
    detailsAlert?: React.ReactNode;
    images: Array<SGLibraryImage>;
    maximumImageBytes: number;
    onImageDeselected?: (image?: SGLibraryImage) => void;
    onImageSelected?: (image?: SGLibraryImage) => void;
    onUpload: (file: File) => void;
    onUploadFailure?: () => void;
    renderImageDetailsActions: (image?: SGLibraryImage, closeDetailsPane?: () => void) => React.ReactNode;
    uploadAlert?: React.ReactElement<AlertProps>;
}
export interface ImageLibraryState {
    selectedImage?: SGLibraryImage;
}
export declare class ImageLibrary extends Component<ImageLibraryProps, ImageLibraryState> {
    state: ImageLibraryState;
    render(): JSX.Element;
    private onThumbnailClick;
    private onImageDeselected;
    private onFileSelect;
    private onInvalidFile;
}
export default ImageLibrary;
