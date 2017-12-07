import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Alert from '../src/components/Alert';
import Dropzone from '../src/components/Dropzone';

const stories = storiesOf('Dropzone', module);

stories.add('Dropzone', () => <Dropzone />);

stories.add('Dropzone (Active)', () => <Dropzone active />);

stories.add('Dropzone (Hovered)', () => <Dropzone hovered />);

stories.add('Dropzone (Large)', () => <Dropzone large />);

stories.add('Dropzone (with Alert)', () => (
  <Dropzone>
    <Alert type="warning" onClick={action('Alert Dismissed')}>
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>.
      In nec augue eu lacus aliquam lobortis.
    </Alert>
  </Dropzone>
));
