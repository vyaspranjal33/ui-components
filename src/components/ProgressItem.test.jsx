// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';
import ProgressItem from './ProgressItem';

describe('ProgressItem', () => {
  it('should display label passed in as prop', () => {
    const wrapper = shallow(
      <ProgressItem label="Test" />
    );
    expect(wrapper.find('label').text()).toBe('Test');
  });

  it('should has .is-selected class when passed selected prop', () => {
    const wrapper = shallow(
      <ProgressItem selected/>
    );
    expect(wrapper.hasClass('is-selected')).toBe(true);
  });

  it('should have .is-done class when passed done prop', () => {
    const wrapper = shallow(
      <ProgressItem done/>
    );
    expect(wrapper.hasClass('is-done')).toBe(true);
  });
});
