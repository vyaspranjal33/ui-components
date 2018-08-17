import React, { Fragment, PureComponent } from 'react';

import { AlertProps } from './alert';
import Dropzone from './dropzone';
import FileUpload, { DroppedFile, FileSelect } from './file-upload';

export interface ImageUploadProps {
  alert?: React.ReactElement<AlertProps>;
  autoClearOnDrop?: boolean; // clears file out on drop (image library needs this)
  maximumImageBytes: number;
  onFileSelect: (files: FileList) => void;
  onInvalidFile?: (files: FileList) => void;
  onRemove?: (event: any) => void;
}

class ImageUpload extends PureComponent<ImageUploadProps> {
  public render() {
    const {
      alert,
      autoClearOnDrop,
      onFileSelect,
      onInvalidFile,
      onRemove,
    } = this.props;

    return (
      <FileUpload
        onFileSelect={onFileSelect}
        onInvalidFile={onInvalidFile}
        validateFile={this.validateFile}
        render={({
          hasFile,
          handleRemove,
          hovered,
          invalid,
          file,
          FileSelectLink,
        }) => (
          <Dropzone
            active={hasFile}
            hovered={hovered}
            invalid={invalid}
            alert={alert}
          >
            {file && !autoClearOnDrop ? (
              <DroppedFile file={file} onRemove={handleRemove} />
            ) : (
              <FileSelect icon="image">
                <Fragment>
                  Drag and drop your images here, or{' '}
                  <FileSelectLink>choose images to upload</FileSelectLink>.
                </Fragment>
              </FileSelect>
            )}
          </Dropzone>
        )}
        supportedType={'image/gif,image/jpeg,image/png'}
      />
    );
  }

  private validateFile = (files: FileList | DataTransferItemList) => {
    const { maximumImageBytes } = this.props;

    if (files.length > 1) {
      return false;
    }

    const file = files[0];
    const isDataTransferItem = file.constructor === DataTransferItem;

    // can't validate size of data transfer item, .getAsFile() returns null
    if (isDataTransferItem) {
      return true;
    }

    if ((file as File).size > maximumImageBytes) {
      return false;
    }

    return true;
  };
}

export default ImageUpload;
