import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Button from '../src/button';
import FullscreenModal from '../src/full-screen-modal';

const stories = storiesOf('FullScreen Modal', module);

class ExampleContainer extends Component<any, { isOpen: boolean }> {
  public readonly state = { isOpen: true };
  public open = (e: any) => {
    this.setState({ isOpen: true });
  };
  public close = (e: any) => {
    this.setState({ isOpen: false });
  };

  public render() {
    return (
      <div>
        <Button type="primary" onClick={this.open}>
          Open Modal
        </Button>
        <FullscreenModal
          isOpen={this.state.isOpen}
          title="Fullscreen Modal"
          onClose={this.close}
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
