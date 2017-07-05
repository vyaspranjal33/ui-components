import React from 'react';
import { shallow } from 'enzyme';
import Icon, { icons } from './Icon';

describe('Icon', () => {
  it('should match the snapshot', () => {
    Object.keys(icons).forEach((icon) => {
      const wrapper = shallow(<Icon type={icon} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
