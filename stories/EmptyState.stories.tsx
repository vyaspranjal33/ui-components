import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';

import EmptyState from '../src/components/EmptyState';
import Button from '../src/components/Button';
import ButtonList from '../src/components/ButtonList';
import Footer from '../src/components/SmallFooter';

const stories = storiesOf('Empty State', module);

stories.add('Empty State With Icon', () => (
  <EmptyState icon='contacts' header='Get started adding contacts'>
    <p>
      Add and update your contacts via CSV upload or manually add them one at a time,
      then create static lists or dynamic segments for better targeting.  Use the
      Add List or Segment button above to get started.
    </p>
  </EmptyState>
));

stories.add('Empty State With Buttons', () => (
  <EmptyState header='Get started adding contacts'>
    <p>
      Add and update your contacts via CSV upload or manually add them one at a time,
      then create static lists or dynamic segments for better targeting.  Use the
      Add List or Segment button above to get started.
    </p>
    <ButtonList>
      <Button type="primary" onClick={action('Button Clicked')}>
        Primary
      </Button>
      <Button type="secondary" onClick={action('Button Clicked')}>
        Secondary
      </Button>
    </ButtonList>
  </EmptyState>
));

stories.add('Empty State With Everything', () => (
  <div>
    <EmptyState icon='contacts' header='Get started adding contacts'>
      <p>
        Add and update your contacts via CSV upload or manually add them one at a time,
        then create static lists or dynamic segments for better targeting.  Use the
        Add List or Segment button above to get started.
      </p>
      <ButtonList>
        <Button type="primary" onClick={action('Button Clicked')}>
          Primary
        </Button>
        <Button type="secondary" onClick={action('Button Clicked')}>
          Secondary
        </Button>
      </ButtonList>
    </EmptyState>
    <Footer icon='help' header='Need help?'>
      <a href='#'>
        Get more info
      </a>{ ' ' }
      on adding and updating contacts.
    </Footer>
  </div>
));
