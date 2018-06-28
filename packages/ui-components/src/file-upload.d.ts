/// <reference types="react" />
import { Component } from 'react';
export interface FileUploadProps {
    onDragEnd?: (event: any) => void;
    onDragLeave?: (event: any) => void;
    onDragOver?: (event: any, files?: DataTransferItemList) => void;
    onDrop?: (event: any, file: FileList) => void;
    supportedTypes: string[];
    render: FileUploadRenderCallback;
}
export interface FileUploadRenderCallbackArguments {
    hovered: boolean;
    active: boolean;
    file?: File;
}
export declare type FileUploadRenderCallback = (args: FileUploadRenderCallbackArguments) => JSX.Element;
export interface FileUploadState {
    files?: FileList;
    hovered: boolean;
}
export interface DroppedFileProps {
    file: File;
    onRemove: (event: any) => void;
}
export declare class FileUpload extends Component<FileUploadProps, FileUploadState> {
    static defaultProps: {
        onDragEnd: () => void;
        onDragLeave: () => void;
        onDragOver: () => void;
        onDrop: () => void;
    };
    state: FileUploadState;
    fileInput: HTMLInputElement;
    updateCurrentFile: (files: FileList, additionalState?: {
        [Key: string]: any;
    }) => void;
    handleDragOver: (event: any) => void;
    handleDragLeave: (event: any) => void;
    handleDrop: (event: any) => boolean;
    handleRemove: (event: any) => void;
    fileTypeIsSupported: (files: FileList | DataTransferItemList) => boolean;
    render(): JSX.Element;
}
export default FileUpload;
