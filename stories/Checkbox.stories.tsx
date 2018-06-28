import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import { Checkbox } from '../src/checkbox';

const stories = storiesOf('Checkbox', module);

type ExampleState = { checked: boolean };
class Example extends Component<any, any> {
  state: ExampleState;

  constructor(props: any) {
    super(props);

    this.state = { checked: false };
  }

  onChange = () => {
    action('Checkbox changed');
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <Checkbox
        checked={this.state.checked}
        disabled={this.props.disabled}
        id={this.props.id}
        label={this.props.label}
        onChange={this.onChange}
      />
    );
  }
}

stories.add('Standard Checkbox', () => (
  <Example
    id="standard-checkbox"
    label="Transactional"
  />
));

stories.add('Disabled Checkbox', () => (
  <Example
    id="disabled-checkbox"
    disabled
    label="Marketing"
  />
));
