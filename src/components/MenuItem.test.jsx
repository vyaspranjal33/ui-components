// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItem from './MenuItem';

describe('MenuItem', () => {
  const noop = () => {};

  it('should have an <a> with the .dropdown-link class', () => {
    const wrapper = shallow(
      <MenuItem>MenuItem Text</MenuItem>
    );
    expect(wrapper.find('.dropdown-link').length).not.toBe(0);
  });

  it('should display text passed in as child', () => {
    const wrapper = shallow(
      <MenuItem>MenuItem Text</MenuItem>
    );
    expect(wrapper.text()).toBe('MenuItem Text');
  });
});
