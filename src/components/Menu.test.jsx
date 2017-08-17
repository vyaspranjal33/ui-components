// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItem from './MenuItem';
import Menu from './Menu';

describe('Menu', () => {
  const noop = () => {};

  it('should have classes of .dropdown, .btn-dropdown, and .btn', () => {
    const wrapper = shallow(
      <Menu />
    );
    expect(wrapper.hasClass('btn')).toBe(true);
    expect(wrapper.hasClass('btn-dropdown')).toBe(true);
    expect(wrapper.hasClass('dropdown')).toBe(true);
  });

  it('should display text passed in as prop', () => {
    const wrapper = shallow(
      <Menu text="Menu Text" />
    );
    expect(wrapper.contains('Menu Text')).toBe(true);
  });

  it('should have class of .btn-primary if passed primary prop', () => {
    const wrapper = shallow(
      <Menu primary />
    );
    expect(wrapper.hasClass('btn-primary')).toBe(true);
  });

  it('should have class of .btn-dropdown-gear if passed gear prop', () => {
    const wrapper = shallow(
      <Menu gear />
    );
    expect(wrapper.hasClass('btn-dropdown-gear')).toBe(true);
  });

  it('should display MenuItems passed in as children', () => {
    const wrapper = shallow(
      <Menu>
        <MenuItem>test</MenuItem>
      </Menu>
    );
    expect(wrapper.contains(<MenuItem>test</MenuItem>)).toBe(true);
  });

  it('should have .is-active class when clicked', () => {
    const wrapper = shallow(
      <Menu />
    );

    wrapper.simulate('click');

    expect(wrapper.hasClass('is-active')).toBe(true);
  });
});
