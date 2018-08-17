import React, { Component } from 'react';
import cn from './utilities/classnames';

import Styles from './styles/image-library-thumbnail-list.module.scss';

export interface ImageLibraryThumbnailListProps {
  images: Array<SGLibraryImage>;
}

export interface SGLibraryImage {
  id: string;
  name: string;
  created: number; // milliseconds since the epoch
  originalUrl: string; // url of original image before any resize
  thumbnailUrl: string;
  width: number; // px
  height: number; // px
  uploadPercent?: number;
}

// this has state of selected img by id
export class ImageLibraryThumbnailList extends Component<ImageLibraryThumbnailListProps> {
  public render () {
    const { images } = this.props;

    return (
      <section className={Styles.list}>
        {images.map(({ id, thumbnailUrl, uploadPercent }) => (
          <ImageLibraryThumbnail
            key={id}
            url={thumbnailUrl}
            uploadPercent={uploadPercent}
            isSelected={false}
            onClick={this.onThumbnailClick}
          />
        ))}
      </section>
    );
  }
  private onThumbnailClick = () => {
  };
}

interface ImageLibraryThumbnailProps {
  url: string;
  isSelected: boolean;
  uploadPercent?: number;
  onClick: () => void;
}

class ImageLibraryThumbnail extends Component<ImageLibraryThumbnailProps> {
  public render () {
    const { isSelected, onClick, uploadPercent, url } = this.props;
    const isUploading = uploadPercent !== undefined;

    return (
      <article
        className={cn(
          Styles['thumbnail-container'], {
            [Styles['is-uploading']]: isUploading,
            [Styles['is-selected']]: isSelected,
          }
        )}
        onClick={onClick}
      >
        {
          isUploading && (
            <span className={Styles['upload-progress-container']}>
              <div className={Styles['upload-progress']} style={{ width: uploadPercent }} />
            </span>
          )
        }
        <img
          className={cn(
            Styles.thumbnail,
          )}
          src={url}
        />
      </article>
    );
  }
}

export default ImageLibraryThumbnailList;
