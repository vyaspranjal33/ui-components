import React, { Component } from 'react';

import { AlertProps } from './alert';
import {
  ImageLibraryThumbnailList,
  SGLibraryImage,
} from './image-library-thumbnail-list';
import ImageUpload from './image-upload';

export interface ImageLibraryProps {
  maximumImageBytes: number; // current api supports roughly 4.3 MB: 8/17/18
  onUpload: (file: File) => void;
  onUploadFailure?: (msg: string) => void;
  uploadAlert?: React.ReactElement<AlertProps>;
  images: Array<SGLibraryImage>;
}

// add to this when each subcomponent is created
export class ImageLibrary extends Component<ImageLibraryProps> {
  public render() {
    const { images, maximumImageBytes, uploadAlert } = this.props;

    return (
      <article>
      <ImageUpload
        clearOnDrop
        alert={uploadAlert}
        onFileSelect={this.onFileSelect}
        onInvalidFile={this.onInvalidFile}
        maximumImageBytes={maximumImageBytes}
      />
      <ImageLibraryThumbnailList
        images={images}
      />
      </article>
    );
  }

  private onFileSelect = (files: FileList) => {
    const { onUpload } = this.props;
    onUpload(files[0]);
  };

  private onInvalidFile = (files: FileList) => {
    const { onUploadFailure } = this.props;
    if (onUploadFailure) {
      onUploadFailure(ERROR_CODES.FILE_SIZE);
    }
  };
}

export const ERROR_CODES = {
  FILE_SIZE: 'imageLibrary.errors.fileSize',
};

export default ImageLibrary;
