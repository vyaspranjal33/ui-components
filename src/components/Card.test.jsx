// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should have a class of .card', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.hasClass('card')).toBe(true);
  });

  it('should have a class of .is-thin if passed a "small" attribute', () => {
    const wrapper = shallow(<Card small />);
    expect(wrapper.hasClass('is-thin')).toBe(true);
  });

  it('should have a class of .is-centered if passed a "centered" attribute', () => {
    const wrapper = shallow(<Card centered />);
    expect(wrapper.hasClass('is-centered')).toBe(true);
  });

  it('should have a class of .is-inline if passed a "inline" attribute', () => {
    const wrapper = shallow(<Card inline />);
    expect(wrapper.hasClass('is-inline')).toBe(true);
  });

  it('should have a class of .is-module if passed a "module" attribute', () => {
    const wrapper = shallow(<Card module />);
    expect(wrapper.hasClass('is-module')).toBe(true);
  });
});
