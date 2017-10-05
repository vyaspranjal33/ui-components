import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Button from '../src/components/Button';
import ToggleButtons from '../src/components/ToggleButtons';

const stories = storiesOf('ToggleButtons', module);

stories.add('Toggle Buttons', () => (
  <ToggleButtons onChange={action('Toggle Changed')}>
    <Button>Day</Button>
    <Button>Week</Button>
    <Button>Month</Button>
  </ToggleButtons>
));

stories.add('Toggle Buttons with an Explicit Active Option', () => (
  <ToggleButtons onChange={action('Toggle Changed')}>
    <Button>Day</Button>
    <Button>Week</Button>
    <Button active>Month</Button>
  </ToggleButtons>
));
