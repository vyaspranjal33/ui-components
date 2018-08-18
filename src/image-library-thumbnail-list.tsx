import React, { Component } from 'react';
import cn from './utilities/classnames';

import Styles from './styles/image-library-thumbnail-list.module.scss';

export interface ImageLibraryThumbnailListProps {
  images: Array<SGLibraryImage>;
  uploadingImages: Array<UploadingImage>;
}

export interface SGLibraryImage {
  id: string;
  name: string;
  created: number; // milliseconds since the epoch
  originalUrl: string; // url of original image before any resize
  thumbnailUrl: string;
  width: number; // px
  height: number; // px
}

// TODO need a new type for images currently uploading (no id yet, etc)
// TODO fig some base64 encoded img to add to stories
export interface UploadingImage {
  name: string;
  uploadPercent: number;
  url: string;
}

// this has state of selected img by id
export class ImageLibraryThumbnailList extends Component<
  ImageLibraryThumbnailListProps
> {
  public render() {
    const { images, uploadingImages } = this.props;

    return (
      <section className={Styles.list}>
        {uploadingImages.map(({ name, uploadPercent, url }) => (
          <ImageLibraryThumbnail
            key={name}
            url={url}
            uploadPercent={uploadPercent}
            isSelected={false}
          />
        ))}

        {images.map(({ id, thumbnailUrl }) => (
          <ImageLibraryThumbnail
            key={id}
            url={thumbnailUrl}
            isSelected={false}
            onClick={this.onThumbnailClick}
          />
        ))}
      </section>
    );
  }
  private onThumbnailClick = () => {
    // todo select img
  };
}

interface ImageLibraryThumbnailProps {
  url: string;
  isSelected: boolean;
  uploadPercent?: number;
  onClick?: () => void;
}

class ImageLibraryThumbnail extends Component<ImageLibraryThumbnailProps> {
  public render() {
    const { isSelected, onClick, uploadPercent, url } = this.props;
    const isUploading = uploadPercent !== undefined && uploadPercent < 99;

    return (
      <article
        className={cn(Styles['thumbnail-container'], {
          [Styles['is-uploading']]: isUploading,
          [Styles['is-selected']]: isSelected,
        })}
        onClick={onClick}
      >
        {isUploading && (
          <span className={Styles['upload-progress-container']}>
            <div
              className={Styles['upload-progress']}
              style={{ width: `${uploadPercent}%` }}
            />
          </span>
        )}
        <img className={cn(Styles.thumbnail)} src={url} />
      </article>
    );
  }
}

export default ImageLibraryThumbnailList;
