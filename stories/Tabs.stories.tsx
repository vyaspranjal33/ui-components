import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { StatefulTabs as Tabs, Tab } from '../src/components/Tabs';

const stories = storiesOf('Tabs', module);

stories.add('Standard Tabs', () => (
  <Tabs onChange={action('Tab Changed')}>
    <Tab onClick={action('Tab Clicked')} active>
      All
    </Tab>
    <Tab onClick={action('Tab Clicked')} number={3}>
      Requesting Access
    </Tab>
    <Tab onClick={action('Tab Clicked')} number={5}>
      Invited
    </Tab>
  </Tabs>
));

stories.add('Centered Tabs', () => (
  <Tabs onChange={action('Tab Changed')} centered>
    <Tab onClick={action('Tab Clicked')} active>
      All
    </Tab>
    <Tab onClick={action('Tab Clicked')} number={3}>
      Requesting Access
    </Tab>
    <Tab onClick={action('Tab Clicked')} number={5}>
      Invited
    </Tab>
  </Tabs>
));

stories.add('Zero-Border Tabs', () => (
  <Tabs onChange={action('Tab Changed')} zeroBorder>
    <Tab onClick={action('Tab Clicked')} active>
      All
    </Tab>
    <Tab onClick={action('Tab Clicked')} number={3}>
      Requesting Access
    </Tab>
    <Tab onClick={action('Tab Clicked')} number={5}>
      Invited
    </Tab>
  </Tabs>
));
