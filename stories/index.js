// @flow
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/Button';
import Welcome from './Welcome';
// eslint-disable-next-line no-unused-vars
import css from '../style-guide/app/scss/style-guide.scss';
// eslint-disable-next-line no-unused-vars
import morecss from '../public/storybook.css';

storiesOf('Welcome', module).add("to SendGrid's Storybook", () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('Primary', () => (
    <Button type="primary" onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('Primary Disabled', () => (
    <Button type="primary" disabled onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('Primary with badge', () => (
    <Button
      type="primary"
      badge="lol cats are the best"
      onClick={action('clicked')}
    >
      Hello Button
    </Button>
  ))
  .add('Primary Disabled with badge', () => (
    <Button
      type="primary"
      disabled
      badge="lol cats are the worst"
      onClick={action('clicked')}
    >
      Hello Button
    </Button>
  ))
  .add('Secondary', () => (
    <Button type="secondary" onClick={action('clicked')}> 😀 😎 👍 💯</Button>
  ))
  .add('Secondary Disabled', () => (
    <Button type="secondary" disabled onClick={action('clicked')}>
      {' '}😀 😎 👍 💯
    </Button>
  ))
  .add('Secondary with badge', () => (
    <Button type="secondary" onClick={action('clicked')} badge="robots">
      😀 😎 👍 💯
    </Button>
  ))
  .add('Secondary Disabled with badge', () => (
    <Button
      type="secondary"
      disabled
      onClick={action('clicked')}
      badge="robots"
    >
      😀 😎 👍 💯
    </Button>
  ));
