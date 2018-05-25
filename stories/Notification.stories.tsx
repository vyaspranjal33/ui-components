import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '../src/button';
import Notification from '../src/notification';

const stories = storiesOf('Notifications', module);

stories.add('Promo Notification', () => (
  <Notification
    type="promo"
    onClick={action('Notification Dismissed')}
    dismissable={true}
  >
    <strong>What happened to that email?</strong> Putting out fires 🔥 is fast with our new email activity feed!
    <Button type="primary" small>Check it Out</Button>
  </Notification>
));

stories.add('Verification Notification', () => (
  <Notification
    type="verification"
  >
    <strong>Unverified accounts are limited to 100 emails per day. Verify your account to send more.</strong>
    <Button type="primary" small>Verify My Account</Button>
  </Notification>
));

stories.add('Verification Step Notification', () => (
  <Notification
    type="verification"
    hasSteps={true}
  >
    <p className="step">Verify your account</p>
    <p><a href="#">Next: Add Two-Factor Authentication</a></p>
    <p className="all-steps"><a href="#">View all steps</a></p>
  </Notification>
));

stories.add('Trial Notification', () => (
  <Notification
    type="trial"
  >
    <strong>23 days</strong> left in your free trial.
    <Button type="primary" small>View Plans &amp; Pricing</Button>
  </Notification>
));

stories.add('Danger Notification', () => (
  <Notification
    type="danger"
  >
    <strong>Your trial expired.</strong> You may still send up to 100 emails per day for testing purposes.
    <Button type="primary" small>Upgrade</Button>
  </Notification>
));
