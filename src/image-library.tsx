import React, { Component } from 'react';
import cn from './utilities/classnames';

import { AlertProps } from './alerts/alert';
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
  // this component shouldn't be "smart enough" to figure out how to display the date
  dateFormatter: (utcMillis: number) => string;

  // don't enforce AlertProps children so consumer can use transition groups here
  detailsAlert?: React.ReactNode;

  images: Array<SGLibraryImage>;
  maximumImageBytes: number; // current api supports roughly 4.3 MB: 8/17/18

  // params optional - maybe consumer doesn't care about the image, just the event
  onImageDeselected?: (image?: SGLibraryImage) => void;
  onImageSelected?: (image?: SGLibraryImage) => void;

  onUpload: (file: File) => void;
  onUploadFailure?: (file: File) => void;
  renderImageDetailsActions: (
    image?: SGLibraryImage,
    closeDetailsPane?: () => void
  ) => React.ReactNode;
  uploadAlert?: React.ReactElement<AlertProps>;

  // setting this mounts the library with as much info as we have available about the image
  // even if the image is not in the user's library.
  initialImage?: SGLibraryImage;
}

export interface ImageLibraryState {
  selectedImage?: SGLibraryImage;
}

export class ImageLibrary extends Component<
  ImageLibraryProps,
  ImageLibraryState
> {
  public state: ImageLibraryState = {
    selectedImage: null,
  };

  public componentDidMount() {
    const { initialImage } = this.props;

    if (initialImage) {
      this.onImageSelected(initialImage);
    }
  }

  public render() {
    const {
      dateFormatter,
      detailsAlert,
      images,
      maximumImageBytes,
      renderImageDetailsActions,
      uploadAlert,
    } = this.props;
    const { selectedImage } = this.state;

    return (
      <div className={Styles.wrap}>
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
            onThumbnailClick={this.onImageSelected}
            selectedImage={selectedImage}
          />
        </div>
        {selectedImage && (
          <ImageLibraryDetailsPane
            alert={detailsAlert}
            dateFormatter={dateFormatter}
            onClose={this.onImageDeselected}
            image={selectedImage}
            renderActions={renderImageDetailsActions}
          />
        )}
      </div>
    );
  }

  private onImageSelected = (selectedImage: SGLibraryImage) => {
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
    // no great way currently to communicate back specifically why the file was invalid,
    // probably best to leave it to the client to figure out why for now.
    // i don't want to go mucking about the internals in the file-upload to address
    // this without a larger discussion first.
    this.props.onUploadFailure(files[0]);
  };
}

export default ImageLibrary;
