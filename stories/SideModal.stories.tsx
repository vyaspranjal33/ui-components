import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Button from '../src/buttons/button';
import { SideModal } from '../src/side-modal';

const stories = storiesOf('SideModal', module);

// Need a way to close/open the modal
class ExampleContainer extends Component<any, { isOpen: boolean }> {
  public readonly state = { isOpen: false };

  public open = () => this.setState({ isOpen: true });
  public close = () => this.setState({ isOpen: false });

  public render() {
    return (
      <Fragment>
        <Button type="primary" onClick={this.open}>
          Open Modal
        </Button>
        <SideModal isOpen={this.state.isOpen} onClose={this.close}>
          <h1>Very cool! 😍</h1>
          <Button type="secondary" onClick={this.close}>
            Alright then
          </Button>
        </SideModal>
      </Fragment>
    );
  }
}

stories.add('SideModal', () => <ExampleContainer />);
