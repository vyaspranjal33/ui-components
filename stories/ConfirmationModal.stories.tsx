import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Button from '../src/components/Button';
import { ConfirmationModal } from '../src/components/ConfirmationModal';

const stories = storiesOf('ConfirmationModal', module);

// Need a way to close/open the modal
class ExampleContainer extends Component<any, { isOpen: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = { isOpen: false };
  }

  public open = (e: any) => { this.setState({ isOpen: true }); };
  public close = (e: any) => { this.setState({ isOpen: false }); };

  public render() {
    return (
      <div>
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
      </div>
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
