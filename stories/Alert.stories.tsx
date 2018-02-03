import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Alert from '../src/components/Alert';
import Button from '../src/components/Button';

const stories = storiesOf('Alerts', module);

class ExampleContainer extends Component<any, { isHidden: boolean }> {
  public show: (e: any) => void;
  public hide: (e: any) => void;

  constructor(props: any) {
    super(props);

    this.show = (e) => {
      action('Alert Shown')(e);
      this.setState({ isHidden: false });
    };

    this.hide = (e) => {
      action('Alert Dismissed')(e);
      this.setState({ isHidden: true });
    };

    this.state = { isHidden: false };
  }

  public render() {
    const alertWithProps = React.cloneElement(
      this.props.children as React.ReactElement<any>,
      {
        hidden: this.state.isHidden,
        onClick: this.hide,
      },
    );

    return (
      <>
        {
          this.state.isHidden &&
            (
              <Button
                type="primary"
                onClick={this.show}
              >
                Show Alert
              </Button>
            )
        }
        {alertWithProps}
      </>
    );
  }
}

stories.add('Success Alert', () => (
  <ExampleContainer>
    <Alert type="success">
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
      nec augue eu lacus aliquam lobortis.
    </Alert>
  </ExampleContainer>
));

stories.add('Warning Alert', () => (
  <ExampleContainer>
    <Alert type="warning">
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
      nec augue eu lacus aliquam lobortis.
    </Alert>
  </ExampleContainer>
));

stories.add('Danger Alert', () => (
  <ExampleContainer>
    <Alert type="danger">
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
      nec augue eu lacus aliquam lobortis.
    </Alert>
  </ExampleContainer>
));

stories.add('Success Alert with Custom Icon', () => (
  <ExampleContainer>
    <Alert type="success" icon="clean-ui">
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
      nec augue eu lacus aliquam lobortis.
    </Alert>
  </ExampleContainer>
));

stories.add('Warning Alert with Custom Icon', () => (
  <ExampleContainer>
    <Alert type="warning" icon="clean-ui">
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
      nec augue eu lacus aliquam lobortis.
    </Alert>
  </ExampleContainer>
));

stories.add('Danger Alert with Custom Icon', () => (
  <ExampleContainer>
    <Alert type="danger" icon="clean-ui">
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
      nec augue eu lacus aliquam lobortis.
    </Alert>
  </ExampleContainer>
));
