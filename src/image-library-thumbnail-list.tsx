import React, { Component } from 'react';
import cn from './utilities/classnames';

import Styles from './styles/image-library-thumbnail-list.module.scss';

export interface ImageLibraryThumbnailListProps {
  images: Array<SGLibraryImage>;
  onThumbnailClick: (id: string) => void;
  selectedImageId?: string;
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

export interface UploadingImage {
  name: string;
  uploadPercent: number;
  url: string;
}

export class ImageLibraryThumbnailList extends Component<
  ImageLibraryThumbnailListProps
> {
  public render() {
    const {
      images,
      onThumbnailClick,
      selectedImageId,
      uploadingImages,
    } = this.props;

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
            isSelected={selectedImageId === id}
            onClick={() => onThumbnailClick(id)}
          />
        ))}
      </section>
    );
  }
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
