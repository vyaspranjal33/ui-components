import React, { Component } from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import TextArea from '../src/text-area';

const stories = storiesOf('Text Area', module);

type InputChangeEventHandler = (event: React.FormEvent<any>) => void;

type RenderProp = (
  value: string,
  handleChange: InputChangeEventHandler
) => React.ReactNode;

class TextAreaContainer extends Component<{ children: RenderProp }, any> {
  public state = { value: '' };

  public handleChange: InputChangeEventHandler = (event: any) => {
    const target = event.target;
    this.setState({ value: target.value });
  };

  public render() {
    const { children } = this.props;
    const { value } = this.state;

    return children(value, this.handleChange);
  }
}

stories.add('Basic', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea id="textarea-basic" label="Label" value={value} onChange={handleChange} />
    )}
  </TextAreaContainer>
));

stories.add('Information Message', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea id="textarea-info" label="Label" value={value} onChange={handleChange} info="This is a message." />
    )}
  </TextAreaContainer>
));

stories.add('Required', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea id="textarea-required" label="Label" value={value} onChange={handleChange} required />
    )}
  </TextAreaContainer>
));

stories.add('Error', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea id="textarea-error" label="Label" value={value} onChange={handleChange} error />
    )}
  </TextAreaContainer>
));

stories.add('Disabled', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea id="textarea-disabled" label="Label" value={value} onChange={handleChange} disabled />
    )}
  </TextAreaContainer>
));

stories.add('Scrollable', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea id="textarea-scrollable" label="Label" value={value} onChange={handleChange} scrollable />
    )}
  </TextAreaContainer>
));

stories.add('With Tooltip', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea id="textarea-tooltip" label="Label" value={value} onChange={handleChange} tooltip="I am a tooltip." />
    )}
  </TextAreaContainer>
));
