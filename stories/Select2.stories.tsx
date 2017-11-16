import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Option, OptGroup, Select2 } from '../src/components/Select2';

const stories = storiesOf('Select2', module);

const onChange = (e: JQuery.Event, val: string[] | string | number[] | number) => {
  console && console.log('Select2 change event published, value: ', val);
};


const Wrapper = (props: any) => (
  <div className="row">
    <div className="col-3">
      {props.children}
    </div>
  </div>
);

stories.add('Standard with some options disabled', () => (
  <Wrapper>
    <Select2
      label="Sender"
      id="standard-select"
      value="Jason"
      placeholder="Select a Sender"
      onChange={onChange}
    >
      <Option value="styleguide-master">Jason</Option>
      <Option>Evan</Option>
      <Option>Katrina</Option>
      <Option disabled>Travis</Option>
      <Option disabled>Tyler</Option>
    </Select2>
  </Wrapper>
));

stories.add('Disabled', () => (
  <Wrapper>
    <Select2
      label="Sender"
      id="standard-select"
      value="Jason"
      placeholder="Select a Sender"
      disabled
      onChange={onChange}
    >
      <Option>Jason</Option>
      <Option>Evan</Option>
      <Option>Katrina</Option>
    </Select2>
  </Wrapper>
));

stories.add('Required', () => (
  <Wrapper>
    <Select2
      label="Sender"
      id="standard-select"
      value="Jason"
      placeholder="Select a Sender"
      required
      onChange={onChange}
    >
      <Option>Jason</Option>
      <Option>Evan</Option>
      <Option>Katrina</Option>
    </Select2>
  </Wrapper>
));

stories.add('Error', () => (
  <Wrapper>
    <Select2
      label="Sender"
      id="standard-select"
      value="Jason"
      placeholder="Select a Sender"
      error="You must construct additional pylons."
      onChange={onChange}
    >
      <Option>Jason</Option>
      <Option>Evan</Option>
      <Option>Katrina</Option>
    </Select2>
  </Wrapper>
));

stories.add('Without search', () => (
  <Wrapper>
    <Select2
      label="Sender"
      id="standard-select"
      value="Jason"
      placeholder="Select a Sender"
      noSearch
      onChange={onChange}
    >
      <Option>Jason</Option>
      <Option>Evan</Option>
      <Option>Katrina</Option>
    </Select2>
  </Wrapper>
));

stories.add('Multiple', () => (
  <Wrapper>
    <Select2
      label="Sender"
      id="standard-select"
      value={['Jason', 'Katrina']}
      placeholder="Select a Sender"
      multiple
      onChange={onChange}
    >
      <Option>Jason</Option>
      <Option>Evan</Option>
      <Option>Katrina</Option>
    </Select2>
  </Wrapper>
));

stories.add('With option groups', () => (
  <Wrapper>
    <Select2
      label="Sender"
      id="standard-select"
      value="Craig"
      placeholder="Select a Sender"
      onChange={onChange}
    >
      <OptGroup label="Designers">
        <Option>Jason</Option>
        <Option>Evan</Option>
        <Option>Katrina</Option>
     </OptGroup>
      <OptGroup label="Engineers">
        <Option>Andrew</Option>
        <Option>Chris</Option>
        <Option>Craig</Option>
     </OptGroup>
    </Select2>
  </Wrapper>
));
