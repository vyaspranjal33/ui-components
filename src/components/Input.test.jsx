// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Input, { getValueType } from './Input';

describe('Input', () => {
  it('wraps an <input> tag', () => {
    const wrapper = shallow(<Input value="" />);
    expect(wrapper.find('input').length).toBe(1);
  });

  it('has a type of "text" if given a string', () => {
    const wrapper = shallow(<Input value="" />);
    expect(wrapper.find('input').prop('type')).toBe('text');
  });

  it('has a type of "text" if given a number', () => {
    const wrapper = shallow(<Input value={2} />);
    expect(wrapper.find('input').prop('type')).toBe('number');
  });
});

describe('getValueType', () => {
  it('should return "text" if given a string', () => {
    expect(getValueType('string')).toBe('text');
  });

  it('should return "number" if given a number', () => {
    expect(getValueType(2)).toBe('number');
  });
});
