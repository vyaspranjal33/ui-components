import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Radio, StatefulRadio } from '../src/components/Radio';

const stories = storiesOf('Radio', module);
const onChange = action('Radio Changed');

stories.add('Standard Radio', () => (
  <StatefulRadio
    onChange={onChange}
    value="SYSTEM_TX_VAL"
    checked={false}
  >
    Transactional
  </StatefulRadio>
));

stories.add('Checked Radio', () => (
  <StatefulRadio checked onChange={onChange} id="cust-id-1">
    Transactional
  </StatefulRadio>
));

stories.add('Disabled Radio', () => (
  <StatefulRadio disabled checked={false} onChange={onChange}>
    Transactional
  </StatefulRadio>
));

stories.add('Checked and Disabled Radio', () => (
  <StatefulRadio checked disabled onChange={onChange}>
    Transactional
  </StatefulRadio>
));

stories.add('Multiple radio btns', () => (
  <div>
    <p>Non stateful example, checked is controlled by props only</p>
    <Radio name="demo" onChange={onChange} checked>Choice 1</Radio>
    <Radio name="demo" onChange={onChange} checked={false}>Choice 2</Radio>
  </div>
));
