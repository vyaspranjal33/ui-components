import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '../buttons/button';
import ButtonList from './button-list';

const stories = storiesOf('Button List', module);

stories.add('Button List on a Light Background', () => (
  <ButtonList>
    <Button type="primary" onClick={action('Button Clicked')}>
      Primary
    </Button>
    <Button type="secondary" onClick={action('Button Clicked')}>
      Secondary
    </Button>
    <Button type="danger" onClick={action('Button Clicked')}>
      Danger
    </Button>
  </ButtonList>
));

stories.add('Button List on a Dark Background', () => (
  <div style={{ backgroundColor: '#294661', height: '100vh' }}>
    <ButtonList onDark>
      <Button type="primary" onClick={action('Button Clicked')}>
        Primary
      </Button>
      <Button type="secondary" onClick={action('Button Clicked')}>
        Secondary
      </Button>
      <Button type="secondary" disabled onClick={action('Button Clicked')}>
        Disabled
      </Button>
    </ButtonList>
  </div>
));
