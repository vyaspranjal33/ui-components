import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Alert from '../src/alert';
import ImageLibrary from '../src/image-library';

const stories = storiesOf('Image Library', module);

let imageIdCounter = 0;
const makeLibraryImage = (width: number, height: number, uploadPercent?: number) => ({
  id: 'abcd-ef01-' + imageIdCounter++,
  name: 'name_abcd-ef01-' + imageIdCounter,
  created: 100000,
  originalUrl: `https://via.placeholder.com/${width}x${height}`,
  thumbnailUrl: `https://via.placeholder.com/${width}x${height}`,
  width,
  height,
  uploadPercent,
});

const images = [
  makeLibraryImage(100, 300, 33.5),
  makeLibraryImage(300, 300, 95),
  makeLibraryImage(300, 100),
  makeLibraryImage(25, 25),
  makeLibraryImage(50, 400),
  makeLibraryImage(400, 50),
];

stories.add('without upload alert, with images', () => (
  <ImageLibrary
    maximumImageBytes={4 * (1 << 20) /* 4 MB */}
    onUpload={action('valid upload')}
    onUploadFailure={action('invalid upload')}
    images={images}
  />
));

stories.add('with upload alert, no images', () => (
  <ImageLibrary
    maximumImageBytes={4 * (1 << 20) /* 4 MB */}
    onUpload={action('valid upload')}
    onUploadFailure={action('invalid upload')}
    uploadAlert={
      <Alert type="danger">
        The image you're attempting to upload exceeds our per-image size limit.
      </Alert>
    }
    images={[]}
  />
));
