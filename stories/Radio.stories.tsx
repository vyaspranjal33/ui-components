import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { StatefulRadio as Radio } from '../src/components/Radio';

const stories = storiesOf('Radio', module);

stories.add('Standard Radio', () => (
  <Radio onChange={action('Radio Changed')}>Transactional</Radio>
));

stories.add('Checked Radio', () => (
  <Radio checked onChange={action('Radio Changed')}>
    Transactional
  </Radio>
));

stories.add('Disabled Radio', () => (
  <Radio disabled onChange={action('Radio Changed')}>
    Transactional
  </Radio>
));

stories.add('Checked and Disabled Radio', () => (
  <Radio checked disabled onChange={action('Radio Changed')}>
    Transactional
  </Radio>
));
