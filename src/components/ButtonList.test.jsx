// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';
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

  it('should have buttons that have a group property set to true', () => {
    const buttonList = (
      <ButtonList>
        <Button />
      </ButtonList>
    );
    const button = buttonList.props.children;
    console.log(button);
    expect(button.props.group).toBe(true);
  });
});
