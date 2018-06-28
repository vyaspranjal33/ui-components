import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Button from '../src/button';
import { ConfirmationModal } from '../src/confirmation-modal';

const stories = storiesOf('ConfirmationModal', module);

// Need a way to close/open the modal
class ExampleContainer extends Component<any, { isOpen: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = { isOpen: true };
  }

  public open = (e: any) => { this.setState({ isOpen: true }); };
  public close = (e: any) => { this.setState({ isOpen: false }); };

  public render() {
    return (
      <div>
        <Button type="primary" onClick={this.open}>Open Modal</Button>
        <ConfirmationModal
          iconType={this.props.iconType}
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
stories.add('ConfirmationModal with icon', () => (
  <ExampleContainer
    iconType="trash"
    renderHeader="Very cool! 😍"
    renderBody="This will make a thing happen."
  />
));
