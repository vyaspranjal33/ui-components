import React from 'react';
import { shallow } from 'enzyme';
import ButtonList from './ButtonList';

describe('<ButtonList />', () => {
  it('should have a class of .btn-list', () => {
    const wrapper = shallow(<ButtonList />);
    expect(wrapper.hasClass('btn-list')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(
      <ButtonList>
        <div className="unique" />
      </ButtonList>,
    );
    expect(wrapper.contains(<div className="unique" />)).toBe(true);
  });
});
