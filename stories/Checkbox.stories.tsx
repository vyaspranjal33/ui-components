import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { StatefulCheckbox as Checkbox } from '../src/components/Checkbox';

const stories = storiesOf('Checkbox', module);

stories.add('Standard Checkbox', () => (
  <Checkbox onChange={action('Checkbox Changed')}>Transactional</Checkbox>
));

stories.add('Checked Checkbox', () => (
  <Checkbox checked onChange={action('Checkbox Changed')}>
    Transactional
  </Checkbox>
));

stories.add('Disabled Checkbox', () => (
  <Checkbox disabled onChange={action('Checkbox Changed')}>
    Transactional
  </Checkbox>
));

stories.add('Checked and Disabled Checkbox', () => (
  <Checkbox checked disabled onChange={action('Checkbox Changed')}>
    Transactional
  </Checkbox>
));
