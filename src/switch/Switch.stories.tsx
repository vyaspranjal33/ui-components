import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import Switch from './index';

const stories = storiesOf('Switch', module);

const propsToState = (props: any) => props.on;
class SwitchContainer extends Component<any, any> {
  public readonly state = { on: propsToState(this.props) };

  public onChange = (e: any) => {
    this.setState({ on: !this.state.on });
  };

  public render() {
    return (
      <Switch
        {...this.props}
        id={this.props.id}
        on={this.state.on}
        onChange={this.onChange}
      />
    );
  }
}

stories.add('Switch - On', () => <SwitchContainer id="switch-example-on" on />);

stories.add('Switch - Off', () => <SwitchContainer id="switch-example-off" />);

stories.add('Switch - Disabled', () => (
  <SwitchContainer id="switch-example-disabled" disabled on />
));
