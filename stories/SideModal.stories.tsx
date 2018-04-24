import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Button from '../src/button';
import { SideModal } from '../src/side-modal';

const stories = storiesOf('SideModal', module);

// Need a way to close/open the modal
class ExampleContainer extends Component<any, { isOpen: boolean }> {
  public open: (e: any) => void;
  public close: (e: any) => void;

  constructor(props: any) {
    super(props);

    this.open = () => this.setState({ isOpen: true });
    this.close = () => this.setState({ isOpen: false });
    this.state = { isOpen: false };
  }

  public render() {
    return (
      <Fragment>
        <Button type="primary" onClick={this.open}>Open Modal</Button>
        <SideModal isOpen={this.state.isOpen} onClose={this.close}>
          <h1>Very cool! 😍</h1>
          <Button type="secondary" onClick={this.close}>Alright then</Button>
        </SideModal>
      </Fragment>
    );
  }
}

stories.add('SideModal', () => (
  <ExampleContainer />
));
