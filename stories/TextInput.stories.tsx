import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { StatefulTextInput, TextInput } from '../src/components/TextInput';

const stories = storiesOf('Text Input', module);

class TextInputWrapper extends React.Component<any, { val: string }> {
  public onChange: (e: any) => void;

  constructor(props: any) {
    super(props);

    this.onChange = (e) => this.setState({ val: e.target.value });
    this.state = { val: 'Type in me!' };
  }

  public render() {
    return (
      <TextInput
        label="Regular text input"
        value={this.state.val}
        type="text"
        id="reg-txt-input"
        onChange={this.onChange}
      />
    );
  }
}

stories.add('Regular (non-stateful) text input', () => (
  <TextInputWrapper />
));

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
