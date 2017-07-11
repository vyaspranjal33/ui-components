// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';
import Step from './Step';

describe('Step', () => {
  it('should display title', () => {
    const wrapper = shallow(
      <Step title="Title" />
    );
    expect(wrapper.find('h3').text()).toBe('Title');
  });

  it('should display description', () => {
    const wrapper = shallow(
      <Step description="Description" />
    );
    expect(wrapper.find('p').text()).toBe('Description');
  });
});
