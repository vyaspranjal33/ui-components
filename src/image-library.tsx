import React, { Component } from 'react';
import cn from './utilities/classnames';

import { AlertProps } from './alert';
import { ImageLibraryDetailsPane } from './image-library-details-pane';
import { ImageLibraryThumbnailList } from './image-library-thumbnail-list';
import ImageUpload from './image-upload';

import Styles from './styles/image-library.module.scss';

export interface SGLibraryImage {
  id: string;
  name: string;
  created?: number; // milliseconds since the epoch
  originalUrl?: string; // url of original image before any resize
  thumbnailUrl?: string;
  width?: number; // px
  height?: number; // px
  uploadPercent?: number;
}

export interface ImageLibraryProps {
  images: Array<SGLibraryImage>;
  maximumImageBytes: number; // current api supports roughly 4.3 MB: 8/17/18
  onImageDeselected?: (image?: SGLibraryImage) => void;
  onImageSelected?: (image: SGLibraryImage) => void;
  onUpload: (file: File) => void;
  onUploadFailure?: (msg: string) => void;
  renderImageDetailsActions: (image: SGLibraryImage) => React.ReactNode;
  uploadAlert?: React.ReactElement<AlertProps>;
  detailsAlert?: React.ReactElement<AlertProps>;
}

export interface ImageLibraryState {
  selectedImage?: SGLibraryImage;
}

// add to this when each subcomponent is created
export class ImageLibrary extends Component<
  ImageLibraryProps,
  ImageLibraryState
> {
  public state: ImageLibraryState = {
    selectedImage: null,
  };

  public render() {
    const {
      detailsAlert,
      images,
      maximumImageBytes,
      renderImageDetailsActions,
      uploadAlert,
    } = this.props;
    const { selectedImage } = this.state;

    return (
      <article className={Styles.wrap}>
        <div
          className={cn(Styles['list-container'], {
            [Styles['details-open']]: !!selectedImage,
          })}
        >
          <ImageUpload
            clearOnDrop
            alert={uploadAlert}
            onFileSelect={this.onFileSelect}
            onInvalidFile={this.onInvalidFile}
            maximumImageBytes={maximumImageBytes}
          />
          <ImageLibraryThumbnailList
            images={images}
            onThumbnailClick={this.onThumbnailClick}
            selectedImage={selectedImage}
          />
        </div>
        {selectedImage && (
          <ImageLibraryDetailsPane
            alert={detailsAlert}
            onClose={this.onImageDeselected}
            image={selectedImage}
            renderActions={renderImageDetailsActions}
          />
        )}
      </article>
    );
  }

  private onThumbnailClick = (selectedImage: SGLibraryImage) => {
    const { onImageSelected } = this.props;
    this.setState({ selectedImage });

    if (onImageSelected) {
      onImageSelected(selectedImage);
    }
  };

  private onImageDeselected = (deselectedImage: SGLibraryImage) => {
    const { onImageDeselected } = this.props;
    this.setState({ selectedImage: null });

    if (onImageDeselected) {
      onImageDeselected(deselectedImage);
    }
  };

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
