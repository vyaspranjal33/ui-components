// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import Icon from './Icon';

describe('Button', () => {
  const noop = () => { };

  it('should have a class of .btn', () => {
    const wrapper = shallow(
      <Button onClick={noop} type="secondary">Button</Button>,
    );
    expect(wrapper.hasClass('btn')).toBe(true);
  });

  it('should display the text passed in as a child', () => {
    const wrapper = shallow(
      <Button onClick={noop} type="secondary">Find Me</Button>,
    );
    expect(wrapper.text()).toBe('Find Me');
  });

  describe('Button.small', () => {
    it('should have a class of .btn-small if passed a property of "small"', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="secondary" small>Button</Button>,
      );
      expect(wrapper.hasClass('btn-small')).toBe(true);
    });
  });

  describe('Button.onDark', () => {
    it('should have a class of .btn-on-dark if passed a property of "onDark"', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="secondary" onDark>Button</Button>,
      );
      expect(wrapper.hasClass('btn-on-dark')).toBe(true);
    });
  });

  describe('Button.disabled', () => {
    it('should have a class of .is-disabled if passed a property of "disabled"', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="secondary" disabled>Button</Button>,
      );
      expect(wrapper.hasClass('is-disabled')).toBe(true);
    });
  });

  describe('Button.loading', () => {
    it('should have a class of .is-loading if passed a property of "loading"', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="secondary" loading>Button</Button>,
      );
      expect(wrapper.hasClass('is-loading')).toBe(true);
    });
  });

  describe('Button.badge', () => {
    it('should have a class of .has-badge is a badge count is provided', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="secondary" badge={2}>Button</Button>,
      );
      expect(wrapper.hasClass('has-badge')).toBe(true);
    });

    it('should not have a class of .has-badge is a badge count is not provided', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="secondary">Button</Button>,
      );
      expect(wrapper.hasClass('has-badge')).toBe(false);
    });

    it('should have a span with the class of .badge if a badge count is provided', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="secondary" badge={2}>Button</Button>,
      );
      expect(wrapper.find('.badge').length).toBe(1);
    });

    it('should not have a span with the class of .badge if a badge count is not provided', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="secondary">Button</Button>,
      );
      expect(wrapper.find('.badge').length).toBe(0);
    });

    it('should display the badge count in the .badge span', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="secondary" badge={2}>Button</Button>,
      );
      expect(wrapper.find('.badge').text()).toBe('2');
    });
  });

  describe('Button types', () => {
    it('should have a class of .btn-primary if passed a type of "primary"', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="primary">Button</Button>,
      );
      expect(wrapper.hasClass('btn-primary')).toBe(true);
    });

    it('should have a class of .btn-secondary if passed a type of "secondary"', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="secondary">Button</Button>,
      );
      expect(wrapper.hasClass('btn-secondary')).toBe(true);
    });

    it('should have a class of .btn-primary if passed a type of "danger"', () => {
      const wrapper = shallow(
        <Button onClick={noop} type="danger">Button</Button>,
      );
      expect(wrapper.hasClass('btn-danger')).toBe(true);
    });
  });

  describe('Buttons with icons', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(
        <Button>
          <Icon type="x" /> Button
        </Button>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Button.onClick', () => {
    it('should fire the function passed in as "onClick" when it is clicked', () => {
      const clickAction = jest.fn();
      const wrapper = shallow(
        <Button onClick={clickAction} type="danger">Button</Button>,
      );

      wrapper.simulate('click');

      expect(clickAction.mock.calls.length).toBe(1);
    });
  });
});
