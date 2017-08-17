// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';
import Step from './Step';
import NumberedSteps from './NumberedSteps';

describe('NumberedSteps', () => {
  it('should have the .numbered-steps class', () => {
    const wrapper = shallow(
      <NumberedSteps>
        <Step title="Step 1" description="First Step" />
      </NumberedSteps>
    );
    expect(wrapper.hasClass('numbered-steps')).toBe(true);
  });

  it('should display the Steps passed in as children', () => {
    const wrapper = mount(
      <NumberedSteps>
        <Step title="Step 1" description="First Step" />
      </NumberedSteps>
    );
    expect(wrapper.find('li').length).not.toBe(0);
  });
});
