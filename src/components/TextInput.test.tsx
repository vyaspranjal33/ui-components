import {shallow} from 'enzyme';
import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';

import { TextInput } from './TextInput';

describe('Input', () => {
  let cmp: any;
  const mockOnChange = jest.fn();

  describe('component lifecycle', () => {
    beforeEach(() => {
      cmp = shallow(
        <TextInput type="text" label="Test Input" id="test-input-simple" onChange={mockOnChange} />,
      );
    });

    it('shows on mount', () => {
      expect(cmp.find('.input-text-wrap').length).toBe(1);
    });

    it('has the correct label', () => {
      expect(cmp.find('.input-text-label').text()).toBe('Test Input');
    });
  });

  describe('text input change and focus', () => {
    beforeEach(() => {
      cmp = shallow(
        <TextInput type="text" label="Test Input" id="test-input-simple" onChange={mockOnChange} />,
      );
    });

    it('calls onChange when value changes', () => {
      cmp.find('#test-input-simple').simulate('change', {target: {value: 'this input sucks'}});
      expect(mockOnChange).toHaveBeenCalledWith('this input sucks');
    });

    it('sets class on focus and removes on blur', () => {
      cmp.find('#test-input-simple').simulate('focus');
      expect(cmp.find('.is-focused').length).toBe(1);
      cmp.find('#test-input-simple').simulate('blur');
      expect(cmp.find('.is-focused').length).toBe(0);
    });
  });

  describe('number input change', () => {
    it('calls onChange when value changes', () => {
      cmp = shallow(
        <TextInput type="number" label="Test Input" id="test-input-simple" onChange={mockOnChange} />,
      );
      cmp.find('#test-input-simple').simulate('change', {target: {value: '123'}});
      expect(mockOnChange).toHaveBeenCalledWith(123);
    });
  });
});
