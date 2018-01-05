import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Button from '../src/components/Button';
import {
  ConfirmationModal,
  ConfirmationModalActions,
  ConfirmationModalBody,
  ConfirmationModalHeader,
} from '../src/components/ConfirmationModal';

const stories = storiesOf('ConfirmationModal', module);

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
        <ConfirmationModal isOpen={this.state.isOpen}>
          <ConfirmationModalHeader>Very cool! 😍</ConfirmationModalHeader>
          <ConfirmationModalBody>
            Deleting this message cannot be undone.
          </ConfirmationModalBody>
          <ConfirmationModalActions>
            <Button small type="secondary" onClick={this.close}>Cancel</Button>
            <Button small type="primary" onClick={this.close}>Confirm</Button>
          </ConfirmationModalActions>
        </ConfirmationModal>
      </Fragment>
    );
  }
}

stories.add('ConfirmationModal', () => (
  <ExampleContainer />
));
