// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { StandardLoader, FragmentLoader } from './Loader';

describe('StandardLoader', () => {
  it('should work with a "small" attribute', () => {
    const wrapper = shallow(
      <StandardLoader small />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should work with a "large" attribute', () => {
    const wrapper = shallow(
      <StandardLoader large />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should work with a "small" and "dark" attributes', () => {
    const wrapper = shallow(
      <StandardLoader small dark />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('FragmentLoader', () => {
  it('should work with a "small" attribute', () => {
    const wrapper = shallow(
      <FragmentLoader small />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should work with a "large" attribute', () => {
    const wrapper = shallow(
      <FragmentLoader large />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should work with a "small" and "dark" attributes', () => {
    const wrapper = shallow(
      <FragmentLoader small dark />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
