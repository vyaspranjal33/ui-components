import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Alert from '../src/components/Alert';

const stories = storiesOf('Alerts', module);

stories.add('Success Alert', () => (
  <Alert type="success" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Warning Alert', () => (
  <Alert type="warning" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Danger Alert', () => (
  <Alert type="danger" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Success Alert with Custom Icon', () => (
  <Alert type="success" icon="clean-ui" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Warning Alert with Custom Icon', () => (
  <Alert type="warning" icon="clean-ui" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Danger Alert with Custom Icon', () => (
  <Alert type="danger" icon="clean-ui" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));
