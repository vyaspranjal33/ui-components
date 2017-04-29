// @flow
import React from 'react';
import { shallow } from 'enzyme';
import ButtonList from './ButtonList';

const Button = () => {};

describe('<ButtonList />', () => {
  it('should have a class of .btn-list', () => {
    const wrapper = shallow(<ButtonList />);

    expect(wrapper.hasClass('btn-list')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(
      <ButtonList>
        <Button />
      </ButtonList>,
    );
    expect(wrapper.find('Button').length).toBe(1);
  });
});
