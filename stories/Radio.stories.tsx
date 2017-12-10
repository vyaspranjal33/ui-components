import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { StatefulRadio as Radio } from '../src/components/Radio';

const stories = storiesOf('Radio', module);
const onChange = action('Radio Changed');

stories.add('Standard Radio', () => (
  <Radio onChange={onChange} value="SYSTEM_TX_VAL">Transactional</Radio>
));

stories.add('Checked Radio', () => (
  <Radio checked onChange={onChange} id="cust-id-1">
    Transactional
  </Radio>
));

stories.add('Disabled Radio', () => (
  <Radio disabled onChange={onChange}>
    Transactional
  </Radio>
));

stories.add('Checked and Disabled Radio', () => (
  <Radio checked disabled onChange={onChange}>
    Transactional
  </Radio>
));

stories.add('Multiple radio btns', () => (
  <div>
    <Radio name="demo" onChange={onChange}>Choice 1</Radio>
    <Radio name="demo" onChange={onChange}>Choice 2</Radio>
  </div>
));
