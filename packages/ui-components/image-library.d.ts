/// <reference types="react" />
import React, { Component } from 'react';
import { AlertProps } from './alert';
export interface ImageLibraryProps {
    maximumImageBytes: number;
    onUpload: (file: File) => void;
    onUploadFailure?: (msg: string) => void;
    uploadAlert?: React.ReactElement<AlertProps>;
}
export declare class ImageLibrary extends Component<ImageLibraryProps> {
    render(): JSX.Element;
    private onFileSelect;
    private onInvalidFile;
}
export declare const ERROR_CODES: {
    FILE_SIZE: string;
};
export default ImageLibrary;
