import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Card } from '../src/components/Card';
import { Column } from '../src/components/Grid/Column';
import { Row } from '../src/components/Grid/Row';

const stories = storiesOf('Grid', module);

stories.add('Row & Column', () => (
  <Row>
    <Column width="6" offset="3">
      <Card
        title="A Six-Wide Column"
        body="This card is in a column six units wide, offset by three."
      />
    </Column>
  </Row>
));
