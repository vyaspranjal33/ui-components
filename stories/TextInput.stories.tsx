import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { StatefulTextInput, TextInput } from '../src/text-input';

const stories = storiesOf('Text Input', module);

stories.add('Text Input Simple', () => (
  <StatefulTextInput
    type="text"
    label="Test Input"
    isRequired={true}
    isValid={true}
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
  />
));

stories.add('Text Input Large', () => (
  <StatefulTextInput
    type="text"
    label="Large Input"
    isLarge={true}
    isValid={true}
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
  />
));

stories.add('Text Input With Info', () => (
  <StatefulTextInput
    type="text"
    label="An Input"
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
    info="This test input is better then your test input."
  />
));

stories.add('Text Input With Error', () => (
  <StatefulTextInput
    type="text"
    label="An Input"
    isValid={false}
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
    info="This test input is wrong somehow."
  />
));

stories.add('Text Input Is Disabled', () => (
  <StatefulTextInput
    type="text"
    label="An Input"
    isDisabled={true}
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
  />
));

stories.add('Text Input With Numbers', () => (
  <StatefulTextInput
    type="number"
    label="A Number"
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
    info="This input always returns a number, not a string."
  />
));

stories.add('Stateless Text Input with a Value Passed as a Prop', () => (
  <TextInput
    type="text"
    label="Stateless Input"
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
    value="Passed-In Value"
  />
));

stories.add('Stateless Text Input with No Value Passed In', () => (
  <TextInput
    type="text"
    label="Stateless Input"
    name="simple"
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
  />
));
