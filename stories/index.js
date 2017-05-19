// @flow
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/Button';
import Welcome from './Welcome';
// eslint-disable-next-line no-unused-vars
import css from '../style-guide/app/scss/style-guide.scss';
// eslint-disable-next-line no-unused-vars
import morecss from '../public/storybook.css';
import Card from '../src/components/Card';

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


const cardStyle = {
  width: "350px",
  margin: "20px"
};

storiesOf("Card", module)
  .add("Standard with textacular", () => (
    <Card small style={{ ...cardStyle }} centered={true}>
      Let's test your integration
    </Card>
  ))
  .add("Large with text", () => (
    <Card  style={{ ...cardStyle }} centered={true}>
      Let's test your integration
    </Card>
  ))
  .add("Inline Card", () => (
    <div>
      <Card small inline={true} style={{ ...cardStyle }} centered={true}>
        Let's test your integrations
      </Card>
      <Card small inline={true} style={{ ...cardStyle }} centered={true}>
        Let's test your integration
      </Card>
    </div>
  )).add("Module Cards", () => (
  <div>
    <Card small module={true} style={{ width:'80px' }} centered={true}>
      <p><i className="sg-icon sg-icon-images" /> Image</p>
    </Card>
    <Card small module={true} style={{ width:"80px" }} centered={true}>
      <p><i className="sg-icon sg-icon-images" /> Image </p>
    </Card>
  </div>
));
