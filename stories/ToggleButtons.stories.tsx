import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '../src/buttons/button';
import ToggleButtons from '../src/toggle-buttons';

const stories = storiesOf('ToggleButtons', module);

stories.add('Toggle Buttons', () => (
  <ToggleButtons
    onChange={action('Toggle Changed')}
    keys={['day', 'week', 'month']}
  >
    {(day, week, month) => (
      <React.Fragment>
        <Button {...day} type="group-item">
          Day
        </Button>
        <Button {...week} type="group-item">
          Week
        </Button>
        <Button {...month} type="group-item">
          Month
        </Button>
      </React.Fragment>
    )}
  </ToggleButtons>
));

stories.add('Toggle Buttons with an Explicit Active Option', () => (
  <ToggleButtons
    keys={['day', 'week', 'month']}
    selectedKey="month"
    onChange={(event, key) => {
      // tslint:disable-next-line:no-console
      console.log(key);
    }}
  >
    {(day, week, month) => (
      <React.Fragment>
        <Button {...day} type="group-item">
          Day
        </Button>
        <Button {...week} type="group-item">
          Week
        </Button>
        <Button
          {...month}
          onClick={(event: Event) => {
            // tslint:disable-next-line:no-console
            console.log('special click', month.key);
            month.onClick(event);
          }}
          type="group-item"
        >
          Month
        </Button>
      </React.Fragment>
    )}
  </ToggleButtons>
));
