import React, { Component } from 'react';
import cn from './utilities/classnames';

import { SGLibraryImage } from './image-library';
import Styles from './styles/image-library-thumbnail-list.module.scss';

export interface ImageLibraryThumbnailListProps {
  images: Array<SGLibraryImage>;
  onThumbnailClick: (id: string) => void;
  selectedImageId?: string;
}

export class ImageLibraryThumbnailList extends Component<
  ImageLibraryThumbnailListProps
> {
  public render() {
    const { images, onThumbnailClick, selectedImageId } = this.props;

    return (
      <section className={Styles.list}>
        {images.map(({ id, thumbnailUrl, uploadPercent }) => (
          <ImageLibraryThumbnail
            key={id}
            url={thumbnailUrl}
            uploadPercent={uploadPercent}
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
        <img src={url} />
      </article>
    );
  }
}

export default ImageLibraryThumbnailList;
