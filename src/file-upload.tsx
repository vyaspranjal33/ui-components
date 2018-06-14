import includes from 'lodash/includes';
import slice from 'lodash/slice';
import some from 'lodash/some';
import React, { Component } from 'react';
import Icon from './icon';
import { IconType } from './types/icons';

const toArray = slice;
const margin = '0.5em';

export interface FileUploadProps {
  onDragEnd?: (event: any) => void;
  onDragLeave?: (event: any) => void;
  onDragOver?: (event: any, files?: DataTransferItemList) => void;
  onDrop?: (event: any, file: FileList) => void;
  onFileSelect?: (files: FileList) => any;
  onInvalidFile?: (files: FileList) => void;
  render: FileUploadRenderCallback;
  supportedType: string;
}

export interface FileUploadRenderCallbackArguments {
  active: boolean;
  file?: File;
  handleRemove: (event: any) => void;
  handleSelect: (event: any) => void;
  hovered: boolean;
  FileSelectLink: (args: { children: string }) => JSX.Element;
}

export type FileUploadRenderCallback = (
  args: FileUploadRenderCallbackArguments
) => JSX.Element;

export interface FileUploadState {
  files?: FileList;
  hovered: boolean;
}

export interface FileSelectProps {
  children: string | JSX.Element;
  className?: string;
  icon?: IconType;
}

export interface DroppedFileProps {
  className?: string;
  file: File;
  icon?: IconType;
  onRemove: (event: any) => void;
}

const getDraggedFiles = (event: DragEvent) => event.dataTransfer.items;
const getDroppedFiles = (event: DragEvent) => event.dataTransfer.files;

export class FileSelect extends Component<FileSelectProps> {
  public static defaultProps = {
    icon: 'csv',
  };

  public style = {
    alignItems: 'center',
    display: 'flex',
  };

  public render() {
    const { children, className, icon } = this.props;
    return (
      <div className={className} style={this.style}>
        <Icon size={30} style={{ marginRight: margin }} type={icon} />
        <span>{children}</span>
      </div>
    );
  }
}

export class DroppedFile extends Component<DroppedFileProps> {
  public static defaultProps = {
    icon: 'csv',
  };

  public style = {
    alignItems: 'center',
    display: 'flex',
  };

  public handleRemove = (event: any) => {
    event.preventDefault();

    const { onRemove } = this.props;
    onRemove(event);
  };

  public render() {
    const { className, file, icon } = this.props;
    return (
      <div className={className} style={this.style}>
        <Icon size={30} style={{ marginRight: margin }} type={icon} />
        <span>{file.name}</span>
        <a href="#" onClick={this.handleRemove} style={{ marginLeft: margin }}>
          Remove
        </a>
      </div>
    );
  }
}

export class FileUpload extends Component<FileUploadProps, FileUploadState> {
  public static defaultProps = {
    onDragEnd: () => {},
    onDragLeave: () => {},
    onDragOver: () => {},
    onDrop: () => {},
    onFileSelect: () => {},
    onInvalidFile: () => {},
  };

  public state: FileUploadState = {
    files: null,
    hovered: false,
  };

  public fileInput: HTMLInputElement = null;

  public handleDragOver = (event: any): void => {
    event.preventDefault();

    const files = getDraggedFiles(event);
    const isSupported = this.fileTypeIsSupported(files);

    this.setState({ hovered: isSupported });
    this.props.onDragOver(event, files);
  };

  public handleDragLeave = (event: any): void => {
    event.preventDefault();

    this.setState({ hovered: false });
    this.props.onDragLeave(event);
  };

  public handleDrop = (event: any): void => {
    event.preventDefault();

    const files = getDroppedFiles(event);
    this.updateCurrentFile(files);
  };

  public handleSelect = (event: any): void => {
    event.preventDefault();

    this.fileInput.click();
  };

  public FileSelectLink = ({ children }: { children: string }): JSX.Element => {
    return (
      <a href="#" onClick={this.handleSelect}>
        {children}
      </a>
    );
  };

  public handleRemove = (event: any): void => {
    this.setState({ files: null }, () => {
      this.fileInput.value = null;
    });
  };

  public handleChange = (event: any): void => {
    event.preventDefault();

    const files = event.target.files;
    this.updateCurrentFile(files);
  };

  public fileTypeIsSupported = (files: DataTransferItemList | FileList) => {
    const { supportedType } = this.props;
    const isSupported = some(files, (file: File) => {
      return includes(supportedType, file.type);
    });
    return isSupported;
  };

  public render() {
    const { FileSelectLink, handleRemove, handleSelect } = this;
    const { hovered, files } = this.state;
    const { render, supportedType } = this.props;

    const [file] = toArray(files);
    const active = !!file;

    return (
      <section
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
        onDragEnd={this.handleDrop}
      >
        {render({
          FileSelectLink,
          active,
          file,
          handleRemove,
          handleSelect,
          hovered,
        })}
        <input
          type="file"
          style={{ display: 'none' }}
          ref={input => (this.fileInput = input)}
          onChange={this.handleChange}
          accept={supportedType}
        />
      </section>
    );
  }

  private updateCurrentFile = (files: FileList) => {
    if (!this.fileTypeIsSupported(files)) {
      this.props.onInvalidFile(files);
      return;
    }

    this.setState({ files, hovered: false }, () => {
      this.props.onDrop(event, files);
      this.props.onFileSelect(files);
    });
  };
}

export default FileUpload;
