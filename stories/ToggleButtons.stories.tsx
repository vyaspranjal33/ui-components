import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Button from '../src/components/Button';
import { StatefulToggleButtons as ToggleButtons } from '../src/components/ToggleButtons';

const stories = storiesOf('ToggleButtons', module);

stories.add('Toggle Buttons', () => (
  <ToggleButtons onChange={action('Toggle Changed')}>
    <Button onClick={action('Toggle Button Clicked')}>Day</Button>
    <Button onClick={action('Toggle Button Clicked')}>Week</Button>
    <Button onClick={action('Toggle Button Clicked')}>Month</Button>
  </ToggleButtons>
));

stories.add('Toggle Buttons with an Explicit Active Option', () => (
  <ToggleButtons onChange={action('Toggle Changed')}>
    <Button onClick={action('Toggle Button Clicked')}>Day</Button>
    <Button onClick={action('Toggle Button Clicked')}>Week</Button>
    <Button onClick={action('Toggle Button Clicked')} active>
      Month
    </Button>
  </ToggleButtons>
));
