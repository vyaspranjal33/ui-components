import React, { Component } from 'react';

import { AlertProps } from './alert';
import ImageUpload from './image-upload';

interface ImageLibraryProps {
  maximumImageBytes: number; // current api supports roughly 4.3 MB: 8/17/18
  onUpload: (promise: Promise<File | string>) => void;
  uploadAlert?: React.ReactElement<AlertProps>;
}

// add to this when each subcomponent is created
export class ImageLibrary extends Component<ImageLibraryProps> {
  public render() {
    const { maximumImageBytes, uploadAlert } = this.props;

    return (
      <ImageUpload
        autoClearOnDrop
        alert={uploadAlert}
        onFileSelect={this.onFileSelect}
        onInvalidFile={this.onInvalidFile}
        maximumImageBytes={maximumImageBytes}
      />
    );
  }

  private onFileSelect = (files: FileList) => {
    const { onUpload } = this.props;
    onUpload(Promise.resolve(files[0]));
  };

  private onInvalidFile = (files: FileList) => {
    const { onUpload } = this.props;
    onUpload(Promise.reject(ERROR_CODES.FILE_SIZE));
  };
}

export const ERROR_CODES = {
  FILE_SIZE: 'imageLibrary.errors.fileSize',
};

export default ImageLibrary;
