import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Button from '../src/components/Button';
import { ConfirmationModal } from '../src/components/ConfirmationModal';

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
        <ConfirmationModal
          isOpen={this.state.isOpen}
          renderActions={() => (
            <Fragment>
              <Button small type="secondary" onClick={this.close}>Cancel</Button>
              <Button small type="primary" onClick={this.close}>Confirm</Button>
            </Fragment>
          )}
          renderBody={this.props.renderBody}
          renderHeader={this.props.renderHeader}
        />
      </Fragment>
    );
  }
}

stories.add('ConfirmationModal with plain contents', () => (
  <ExampleContainer
    renderHeader="Very cool! 😍"
    renderBody="This will make a thing happen."
  />
));

stories.add('ConfirmationModal with rich contents', () => (
  <ExampleContainer
    renderHeader={() => (
      <p>That's a <u>spicy</u> meatball!</p>
    )}
    renderBody={() => (
      <p>
        <img src="http://placebeard.it/150/100" />
        <br />
        Grooming this beard cannot be undone.
      </p>
    )}
  />
));
