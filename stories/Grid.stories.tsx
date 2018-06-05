import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Card, CardBody, CardTitle } from '../src/card';
import Divider from '../src/divider';
import { Column } from '../src/grid/column';
import { Row } from '../src/grid/row';

const stories = storiesOf('Grid', module);

stories.add('Using Width & Offset', () => (
  <Row>
    <Column width={6} offset={3}>
      <Card>
        <CardTitle>A Six-Wide Column</CardTitle>
        <CardBody>
          This card is in a column six units wide, offset by three.
        </CardBody>
      </Card>
    </Column>
  </Row>
));

stories.add('4/8 Column Config', () => (
  <div>
    <Row>
      <Column width={4}>
        <Card>
          <CardTitle>A Four-Wide Column</CardTitle>
          <CardBody>This card is four columns wide.</CardBody>
        </Card>
      </Column>
      <Column width={8}>
        <Card>
          <CardTitle>An Eight-Wide Column</CardTitle>
          <CardBody>This card is eight columns wide.</CardBody>
        </Card>
      </Column>
    </Row>
    <Divider thin />
  </div>
));

stories.add('Default (No Width or Offset)', () => (
  <Row>
    <Column>
      <Card>
        <CardTitle>A Default Column</CardTitle>
        <CardBody>This card is in a column with no width or offset.</CardBody>
      </Card>
    </Column>
  </Row>
));

stories.add('Width 12', () => (
  <Row>
    <Column width={12}>
      <Card>
        <CardTitle>A Width Only Column</CardTitle>
        <CardBody>This card specifies 12 width and no offset.</CardBody>
      </Card>
    </Column>
  </Row>
));

stories.add('Offset 5', () => (
  <Row>
    <Column offset={5}>
      <Card>
        <CardTitle>An Offset Only Column</CardTitle>
        <CardBody>This card specifies 5 offset and no width.</CardBody>
      </Card>
    </Column>
  </Row>
));
