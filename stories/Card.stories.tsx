import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Action, Actions } from '../src/actions';
import Badge from '../src/badge';
import Button from '../src/button';
import Card, { CardBody, CardIcon, CardTitle } from '../src/card';
import Icon from '../src/icon';

const stories = storiesOf('Card', module);

stories.add('Card with Title and Body', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card>
        <CardTitle>SMTP Relay</CardTitle>
        <CardBody>
          The easiest way to send email. It only requires modifying your
          application’s SMTP configuration.
        </CardBody>
      </Card>
    </div>
  </div>
));

stories.add('Card with Title and Body (Selected)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card selected>
        <CardTitle>SMTP Relay</CardTitle>
        <CardBody>
          The easiest way to send email. It only requires modifying your
          application’s SMTP configuration.
        </CardBody>
      </Card>
    </div>
  </div>
));

stories.add('Card with Title and Body (Centered)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card centered>
        <CardTitle>SMTP Relay</CardTitle>
        <CardBody>
          The easiest way to send email. It only requires modifying your
          application’s SMTP configuration.
        </CardBody>
      </Card>
    </div>
  </div>
));

stories.add('Card with Title and Body (with Custom Children)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card>
        <CardTitle>SMTP Relay</CardTitle>
        <CardBody>
          The easiest way to send email. It only requires modifying your
          application’s SMTP configuration.
        </CardBody>
        <Button type="primary">Choose</Button>
      </Card>
    </div>
  </div>
));

stories.add(
  'Card with Title and Body (with Custom Children, Centered, Selected)',
  () => (
    <div className="row">
      <div className="col-4" style={{ width: '300px' }}>
        <Card centered selected>
          <CardTitle>SMTP Relay</CardTitle>
          <CardBody>
            The easiest way to send email. It only requires modifying your
            application’s SMTP configuration.
          </CardBody>
          <Button type="primary">Choose</Button>
        </Card>
      </div>
    </div>
  )
);

stories.add('Card with Badge', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card>
        <Badge color="mantis"> Recommended </Badge>
        <CardTitle>SMTP Relay</CardTitle>
        <CardBody>
          The easiest way to send email. It only requires modifying your
          application’s SMTP configuration.
        </CardBody>
      </Card>
    </div>
  </div>
));

stories.add('Card with Badge (Centered)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card centered>
        <Badge color="mantis"> Recommended </Badge>
        <CardTitle>SMTP Relay</CardTitle>
        <CardBody>
          The easiest way to send email. It only requires modifying your
          application’s SMTP configuration.
        </CardBody>
      </Card>
    </div>
  </div>
));

stories.add('Card with Icon (Centered)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card centered>
        <CardIcon icon="locked" iconSize={30} />
        <CardTitle>SMTP Relay</CardTitle>
        <CardBody>
          The easiest way to send email. It only requires modifying your
          application’s SMTP configuration.
        </CardBody>
      </Card>
    </div>
  </div>
));

stories.add('Card w/Actions (Vertical)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card centered>
        <CardTitle>Event Annoucements</CardTitle>
        <CardBody>
          Hear about our latest events and when we're coming to a city near you.
        </CardBody>
        <Actions vertical>
          <Action
            title="Edit"
            icon="pencil"
            onClick={action('Edit Action Clicked')}
          />
          <Action
            title="Preview"
            icon="view"
            onClick={action('Preview Action Clicked')}
          />
          <Action
            title="Export"
            icon="export"
            onClick={action('Export Action Clicked')}
          />
        </Actions>
      </Card>
    </div>
  </div>
));

stories.add('Card (Large)', () => (
  <div className="row">
    <div className="col-8" style={{ width: '800px' }}>
      <Card centered>
        <CardIcon icon="airplane" iconSize={40} />
        <CardTitle>Large &amp; In-Charge</CardTitle>
        <CardBody>
          The easiest way to send email. It only requires modifying your
          application’s SMTP configuration.
        </CardBody>
        <Button type="secondary">Choose</Button>
      </Card>
    </div>
  </div>
));

stories.add('Card (Inline)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card inline>
        <CardTitle inline>Node.js</CardTitle>
        <Button type="secondary">Choose</Button>
      </Card>
    </div>
  </div>
));

stories.add('Card (Inline, Thin)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card inline thin>
        <CardTitle inline>Node.js</CardTitle>
        <Button type="secondary" small>
          Choose
        </Button>
      </Card>
    </div>
  </div>
));
