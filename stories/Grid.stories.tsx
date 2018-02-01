import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Card } from '../src/components/Card';
import { Column } from '../src/components/Grid/Column';
import { Row } from '../src/components/Grid/Row';
import Divider from '../src/components/Divider';

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

stories.add('4/8 Column Config', () => (
  <div>
    <Row>
      <Column width="4">
        <Card
          title="A Four-Wide Column"
          body="This card is four columns wide."
        />
      </Column>
      <Column width="8">
        <Card
          title="An Eight-Wide Column"
          body="This card is eight columns wide."
        />
      </Column>
    </Row>
    <Divider thin />
  </div>
));
