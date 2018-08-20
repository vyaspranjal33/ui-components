import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Column } from '../src/grid/column';
import { Row } from '../src/grid/row';
import PercentInput from '../src/percent-input';

const stories = storiesOf('Percent Input', module);


stories.add('Basic', () => (
  <Row>
  <Column width={1}>
    <PercentInput
      id="test-percentage"
      onChange={action('change')}
    />
  </Column>
</Row>
));
