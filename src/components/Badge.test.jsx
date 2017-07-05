// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Badge from './Badge';

describe('Badge', () => {
  it('should have a class of .badge', () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper.hasClass('badge')).toBe(true);
  });

  it('should have the contents passed in as a child', () => {
    const label = 'Label';
    const wrapper = shallow(<Badge>{label}</Badge>);
    expect(wrapper.text()).toBe(label);
  });
});
