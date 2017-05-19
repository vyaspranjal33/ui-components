// @flow
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/components/Button';
import Welcome from './Welcome';
// eslint-disable-next-line no-unused-vars
import css from '../style-guide/app/scss/style-guide.scss';
// eslint-disable-next-line no-unused-vars
import morecss from './storybook.css';
import Card from '../src/components/Card';
import { StandardLoader, FragmentLoader } from '../src/components/Loader';

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
    <Button type="primary" badge={1} onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('Primary Disabled with badge', () => (
    <Button type="primary" disabled badge={1} onClick={action('clicked')}>
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
    <Button type="secondary" onClick={action('clicked')} badge={2}>
      😀 😎 👍 💯
    </Button>
  ))
  .add('Secondary Disabled with badge', () => (
    <Button type="secondary" disabled onClick={action('clicked')} badge={2}>
      😀 😎 👍 💯
    </Button>
  ));
const cardStyle = {
  width: '350px',
  margin: '20px',
};
storiesOf('Card', module)
  .add('Standard with textacular', () => (
    <Card small style={{ ...cardStyle }} centered>
      {"Let's test your integration"}
    </Card>
  ))
  .add('Large with text', () => (
    <Card style={{ ...cardStyle }} centered>
      {"Let's test your integration"}
    </Card>
  ))
  .add('Inline Card', () => (
    <div>
      <Card small inline style={{ ...cardStyle }} centered>
        {"Let's test your integration"}
      </Card>
      <Card small inline style={{ ...cardStyle }} centered>
        {"Let's test your integration"}
      </Card>
    </div>
  ))
  .add('Module Cards', () => (
    <div>
      <Card small module style={{ width: '80px' }} centered>
        <p><i className="sg-icon sg-icon-images" /> Image</p>
      </Card>
      <Card small module style={{ width: '80px' }} centered>
        <p><i className="sg-icon sg-icon-images" /> Image </p>
      </Card>
    </div>
  ));
storiesOf('Loader', module)
  .add('Standard Loader', () => <StandardLoader />)
  .add('Standard Loader small', () => <StandardLoader small />)
  .add('Standard Loader large', () => <StandardLoader large />)
  .add('Standard Loader dark', () => (
    <div
      style={{
        background: 'black',
      }}
    >
      <StandardLoader dark />
    </div>
  ))
  .add('Fragment Loader', () => <FragmentLoader />);
