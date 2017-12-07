import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Option, Select } from '../src/components/Select/index';

const stories = storiesOf('Select', module);

stories.add('Standard Select', () => (
  <Select label="Sender" placeholder="Select a Sender">
    <Option>Jason</Option>
    <Option>Evan</Option>
    <Option>Katrina</Option>
  </Select>
));

stories.add('Required Select', () => (
  <Select label="Sender" placeholder="Select a Sender" required>
    <Option>Jason</Option>
    <Option>Evan</Option>
    <Option>Katrina</Option>
  </Select>
));

stories.add('Disabled Select', () => (
  <Select label="Sender" placeholder="Select a Sender" disabled>
    <Option>Jason</Option>
    <Option>Evan</Option>
    <Option>Katrina</Option>
  </Select>
));

stories.add('Select with Error', () => (
  <Select label="Sender" placeholder="Select a Sender" error>
    <Option>Jason</Option>
    <Option>Evan</Option>
    <Option>Katrina</Option>
  </Select>
));
