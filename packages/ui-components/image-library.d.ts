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
    maximumImageBytes: number;
    onUpload: (file: File) => void;
    onUploadFailure?: (msg: string) => void;
    uploadAlert?: React.ReactElement<AlertProps>;
    images: Array<SGLibraryImage>;
}
export interface ImageLibraryState {
    selectedImageId?: string;
}
export declare class ImageLibrary extends Component<ImageLibraryProps, ImageLibraryState> {
    state: ImageLibraryState;
    render(): JSX.Element;
    private onThumbnailClick;
    private onFileSelect;
    private onInvalidFile;
}
export declare const ERROR_CODES: {
    FILE_SIZE: string;
};
export default ImageLibrary;
