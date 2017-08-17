// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';
import ProgressItem from './ProgressItem';
import Progress from './Progress';

describe('Progress', () => {
  it('should have the class .progress-container', () => {
    const wrapper = shallow(
      <Progress>
        <ProgressItem>Test</ProgressItem>
      </Progress>
    );
    expect(wrapper.hasClass('progress-container')).toBe(true);
  });

  it('should have .is-vertical class upon being passed vertical prop', () => {
    const wrapper = shallow(
      <Progress vertical>
        <ProgressItem>Test</ProgressItem>
      </Progress>
    );
    expect(wrapper.hasClass('is-vertical')).toBe(true);
  });

  it('should display ProgressItems passed in as children', () => {
    const wrapper = mount(
      <Progress>
        <ProgressItem>Test</ProgressItem>
      </Progress>
    );
    expect(wrapper.find('li').length).not.toBe(0);
  });
});
