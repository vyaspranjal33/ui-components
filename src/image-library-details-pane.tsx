import React, { Component } from 'react';

import { AlertProps } from './alerts/alert';
import Icon from './icon';
import { SGLibraryImage } from './image-library';

import Styles from './styles/image-library-details-pane.module.scss';

export interface ImageLibraryDetailsPaneProps {
  alert?: React.ReactNode;
  dateFormatter: (utcMillis: number) => string;
  image: SGLibraryImage;
  onClose: (image?: SGLibraryImage) => void;

  // allow consumer to explicitly close the details pane when actions are clicked
  renderActions: (
    image?: SGLibraryImage,
    closeDetailsPane?: () => void
  ) => React.ReactNode;
}

export class ImageLibraryDetailsPane extends Component<
  ImageLibraryDetailsPaneProps
> {
  public render() {
    const { alert, dateFormatter, image, renderActions } = this.props;

    return (
      <div className={Styles.wrap}>
        {!!alert && <div className={Styles['alert-wrap']}>{alert}</div>}
        <a
          href="javascript: void 0"
          onClick={this.onClose}
          className={Styles['x-wrap']}
        >
          <Icon className={Styles.x} type="x" />
        </a>
        <h3>Image Details</h3>
        <div className={Styles['img-wrap']}>
          <img src={image.originalUrl} />
        </div>

        <div className={Styles['metadata-wrap']}>
          <h3>File Name: </h3>
          <p className="small">{image.name}</p>
        </div>

        <div className={Styles['metadata-wrap']}>
          <h3>Upload: </h3>
          <p className="small">{dateFormatter(image.created)}</p>
        </div>

        <div className={Styles['metadata-wrap']}>
          <h3>Dimensions: </h3>
          <p className="small">{`${image.width} x ${image.height}`} px</p>
        </div>

        <div className={Styles['metadata-wrap']}>
          <h3>Image URL: </h3>
          <p className="small">{image.originalUrl}</p>
        </div>

        {renderActions(image, this.onClose)}
      </div>
    );
  }

  private onClose = () => {
    const { image, onClose } = this.props;
    onClose(image);
  };
}

export default ImageLibraryDetailsPane;
