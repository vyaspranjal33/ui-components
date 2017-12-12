import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Radio, RadioGroup, StatefulRadio } from '../src/components/Radio';

const stories = storiesOf('Radio', module);
const onChange = action('Radio Changed');

stories.add('Standard Radio', () => (
  <StatefulRadio
    onChange={onChange}
    value="SYSTEM_TX_VAL"
    checked={false}
    label="Transactional"
    id="cust-type"
  />
));

stories.add('Checked Radio', () => (
  <StatefulRadio
    checked
    onChange={onChange}
    id="cust-id-1"
    label="Jim"
    value="jim-id-7"
  />
));

stories.add('Disabled Radio', () => (
  <StatefulRadio
    disabled
    checked={false}
    onChange={onChange}
    label="disabled Jim"
    value="disabled-jim-id-7"
    id="disabled-cust-1"
  />
));

stories.add('Checked and Disabled Radio', () => (
  <StatefulRadio
    checked
    disabled
    onChange={onChange}
    id="bill"
    label="Bill"
    value="bill-id-1"
  />
));

stories.add('Multiple radio btns', () => (
  <RadioGroup name="radio-grp-1" onChange={onChange}>
    <Radio checked label="Choice 1" value="choice-1" />
    <Radio checked={false} label="Choice 2" value="choice-2" />
  </RadioGroup>
));
