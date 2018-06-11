import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import Switch from './index';

const stories = storiesOf('Switch', module);

class SwitchContainer extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { isOn: this.props.isOn };
  }

  public onChange = (e: any) => {
    this.setState({ isOn: !this.state.isOn });
  };

  public render() {
    return (
      <Switch
        {...this.props}
        id={this.props.id}
        isOn={this.state.isOn}
        onChange={this.onChange}
      />
    );
  }
}

stories.add('Switch - On', () => (
  <SwitchContainer id="switch-example-on" isOn />
));

stories.add('Switch - Off', () => <SwitchContainer id="switch-example-off" />);

stories.add('Switch - Disabled', () => (
  <SwitchContainer id="switch-example-disabled" isDisabled isOn />
));
