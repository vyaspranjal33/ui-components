import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Actions, Action } from '../src/components/Actions';
import Button from '../src/components/Button';
import Card from '../src/components/Card';

const stories = storiesOf('Card', module);

stories.add('Card with Title and Body', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card
        title="SMTP Relay"
        body="The easiest way to send email. It only requires modifying your application’s SMTP configuration."
      />
    </div>
  </div>
));

stories.add('Card with Title and Body (Centered)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card
        title="SMTP Relay"
        body="The easiest way to send email. It only requires modifying your application’s SMTP configuration."
        centered
      />
    </div>
  </div>
));

stories.add('Card with Title and Body (with Custom Children)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card
        title="SMTP Relay"
        body="The easiest way to send email. It only requires modifying your application’s SMTP configuration."
      >
        <Button type="primary">Choose</Button>
      </Card>
    </div>
  </div>
));

stories.add(
  'Card with Title and Body (with Custom Children and Centered)',
  () => (
    <div className="row">
      <div className="col-4" style={{ width: '300px' }}>
        <Card
          title="SMTP Relay"
          body="The easiest way to send email. It only requires modifying your application’s SMTP configuration."
          centered
        >
          <Button type="primary">Choose</Button>
        </Card>
      </div>
    </div>
  ),
);

stories.add('Card with Badge', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card
        title="SMTP Relay"
        body="The easiest way to send email. It only requires modifying your application’s SMTP configuration."
        badge={{
          color: 'mantis',
          content: 'Recommended',
        }}
      />
    </div>
  </div>
));

stories.add('Card with Badge (Centered)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card
        title="SMTP Relay"
        body="The easiest way to send email. It only requires modifying your application’s SMTP configuration."
        badge={{
          color: 'mantis',
          content: 'Recommended',
        }}
        centered
      />
    </div>
  </div>
));

stories.add('Card with Actions', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <Card
        title="Event Annoucements"
        body="Hear about our latest events and when we're coming to a city near you."
        centered
      >
        <Actions>
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
