import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '../src/components/Icon';
import { TextInput } from '../src/components/TextInput';
import { HTMLTooltip, Tooltip } from '../src/components/Tooltip';

const stories = storiesOf('Tooltip', module);

stories.add('Standard (Up)', () => (
  <h3>
    Tooltip Up
    <Tooltip content="Hello." direction="up">
      <Icon type="info-circle" />
    </Tooltip>
  </h3>
));

stories.add('Standard (Down)', () => (
  <h3>
    Tooltip Down
      <Tooltip content="Hello." direction="down">
      <Icon type="info-circle" />
    </Tooltip>
  </h3>
));

stories.add('Standard (Left)', () => (
  <h3>
    Tooltip Left
    <Tooltip content="Hello." direction="left">
      <Icon type="info-circle" />
    </Tooltip>
  </h3>
));

stories.add('Standard (Right)', () => (
  <h3>
    Tooltip Right
    <Tooltip content="Hello." direction="right">
      <Icon type="info-circle" />
    </Tooltip>
  </h3>
));

stories.add('Standard (Fit-content)', () => (
  <h3>
    Tooltip Right
    <Tooltip content="Hello." direction="right">
      <Icon type="info-circle" />
    </Tooltip>
  </h3>
));

stories.add('Standard (Small-content)', () => (
  <h3>
    Tooltip Small Content
    <Tooltip content="A blurb." direction="right" length="small">
      <Icon type="info-circle" />
    </Tooltip>
  </h3>
));

stories.add('Standard (Medium-content)', () => (
  <h3>
    Tooltip Medium Content
    <Tooltip content="Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet." direction="right" length="medium">
      <Icon type="info-circle" />
    </Tooltip>
  </h3>
));

stories.add('Standard (Large-content)', () => (
  <h3>
    Tooltip Large Content
    <Tooltip content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." direction="down" length="large">
      <Icon type="info-circle" />
    </Tooltip>
  </h3>
));

stories.add('Standard (XLarge-content)', () => (
  <h3>
    Tooltip XLarge Content
    <Tooltip content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." direction="down" length="xlarge">
      <Icon type="info-circle" />
    </Tooltip>
  </h3>
));

stories.add('Underline', () => (
  <Tooltip
    content="That means automatic teller machine."
    direction="right"
    className="has-underline"
  >
    <span>ATM</span>
  </Tooltip>
));

stories.add('HTML Content', () => (
  <div className="input-text-wrap">
    <TextInput
      type="text"
      label="CCV"
      id="input-text-example-ccv"
      onChange={action('Input Changed')}
    >

      <div className="input-info-tooltip">
        <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="left">
          <p>
            The <a href="#">CCV number</a> is a 3 or 4 digit security code printed
            on the front or back of your card.
        </p>
        </HTMLTooltip>
      </div>
    </TextInput>
  </div>
));

stories.add('HTML Content (Small-content)', () => (
  <div className="input-text-wrap">
    <TextInput
      type="text"
      label="CCV"
      id="input-text-example-ccv"
      onChange={action('Input Changed')}
    >

      <div className="input-info-tooltip">
        <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="left" length="small">
          <p>
            Click <a href="#">here</a>.
          </p>
        </HTMLTooltip>
      </div>
    </TextInput>
  </div>
));

stories.add('HTML Content (Medium-content)', () => (
  <div className="input-text-wrap">
    <TextInput
      type="text"
      label="CCV"
      id="input-text-example-ccv"
      onChange={action('Input Changed')}
    >

      <div className="input-info-tooltip">
        <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="left" length="medium">
          <p>
            This is a <a href="#">decent-sized</a> blurb.
          </p>
        </HTMLTooltip>
      </div>
    </TextInput>
  </div>
));

stories.add('HTML Content (Large-content)', () => (
  <div className="input-text-wrap">
    <TextInput
      type="text"
      label="CCV"
      id="input-text-example-ccv"
      onChange={action('Input Changed')}
    >

      <div className="input-info-tooltip">
        <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="left" length="large">
          <p>
            Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. <a href="#">Lorem</a> ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </HTMLTooltip>
      </div>
    </TextInput>
  </div>
));