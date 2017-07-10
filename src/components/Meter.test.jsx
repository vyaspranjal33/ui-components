// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Meter from './Meter';

describe('Meter', () => {
  it('should have the .meter-container class', () => {
    const wrapper = shallow(
      <Meter />
    );
    expect(wrapper.hasClass('meter-container')).toBe(true);
  });

  it('should display the title passed in as a prop', () => {
    const wrapper = shallow(
      <Meter title="Meter Title" />
    );
    expect(wrapper.find('.meter-title').text()).toBe('Meter Title');
  });

  it('should display the correct percentage passed in as a prop', () => {
    const wrapper = shallow(
      <Meter percentage={50} />
    );
    expect(wrapper.find('.meter-value').text()).toBe('50%');
  });

  it('should have the correct percentageClasses', () => {
    const wrapperAboveFifty = shallow(
      <Meter percentage={51} />
    );
    const wrapperBelowFifty = shallow(
      <Meter percentage={49} />
    );
    const wrapperBelowTwentyFive = shallow(
      <Meter percentage={24} />
    );

    expect(wrapperAboveFifty.find('.meter-bar-fill').hasClass('is-above-50')).toBe(true);
    expect(wrapperBelowFifty.find('.meter-bar-fill').hasClass('is-below-50')).toBe(true);
    expect(wrapperBelowTwentyFive.find('.meter-bar-fill').hasClass('is-below-25')).toBe(true);
  });
});
