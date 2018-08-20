import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Alert from '../src/alert';
import ImageLibrary from '../src/image-library';

const stories = storiesOf('Image Library', module);

stories.add('without upload alert', () => (
  <ImageLibrary
    maximumImageBytes={4 * (1 << 20) /* 4 MB */}
    onUpload={action('valid upload')}
    onUploadFailure={action('invalid upload')}
  />
));

stories.add('with upload alert', () => (
  <ImageLibrary
    maximumImageBytes={4 * (1 << 20) /* 4 MB */}
    onUpload={action('valid upload')}
    onUploadFailure={action('invalid upload')}
    uploadAlert={
      <Alert type="danger">
        The image you're attempting to upload exceeds our per-image size limit.
      </Alert>
    }
  />
));
