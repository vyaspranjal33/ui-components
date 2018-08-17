import React, { Component } from 'react';

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
}

export class ImageLibraryThumbnailList extends Component<ImageLibraryThumbnailListProps> {
  public render () {
    const { images } = this.props;

    return (
      <section className={Styles.list}>
        {images.map(({ id, thumbnailUrl }) => (
          <ImageLibraryThumbnail
            key={id}
            url={thumbnailUrl}
          />
        ))}
      </section>
    );
  }
}

interface ImageLibraryThumbnailProps {
  url: string;
}

class ImageLibraryThumbnail extends Component<ImageLibraryThumbnailProps> {
  render () {
    const { url } = this.props;

    return (
      <span>
        <img src={url} />
      </span>
    );
  }
}

export default ImageLibraryThumbnailList;
