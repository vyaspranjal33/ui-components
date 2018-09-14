import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import CSVUpload from './csv-upload';

const stories = storiesOf('CSV Upload', module);

stories.add('Basic CSV Upload', () => (
  <CSVUpload onChange={action('File Selected')} />
));
