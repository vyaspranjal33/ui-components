/// <reference types="react" />
import React, { PureComponent } from 'react';
import { AlertProps } from './alert';
export interface ImageUploadProps {
    alert?: React.ReactElement<AlertProps>;
    clearOnDrop?: boolean;
    maximumImageBytes: number;
    onFileSelect: (files: FileList) => void;
    onInvalidFile?: (files: FileList) => void;
    onRemove?: (event: any) => void;
}
declare class ImageUpload extends PureComponent<ImageUploadProps> {
    render(): JSX.Element;
    private validateFile;
}
export default ImageUpload;
