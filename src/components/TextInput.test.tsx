import {shallow} from 'enzyme';
import React from 'react';

import { TextInput } from './TextInput';

describe('Input', () => {
  let cmp: any;
  const mockOnChange = jest.fn();
  const mockOnBlur = jest.fn();

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
        <TextInput type="text" label="Test Input" id="test-input-simple" onChange={mockOnChange} onBlur={mockOnBlur} />,
      );
    });

    it('calls onChange when value changes', () => {
      cmp.find('#test-input-simple').simulate('change', {target: {value: 'this input sucks'}});
      expect(mockOnChange).toHaveBeenCalledWith('this input sucks');
    });

    it('calls onBlur on blur event with target', () => {
      cmp.find('#test-input-simple').simulate('blur', {target: {value: 'onBlur called'}});
      expect(mockOnBlur).toHaveBeenCalledWith('onBlur called');
    });

    it('sets class on focus and removes on blur without blur event handler', () => {
      cmp.find('#test-input-simple').simulate('focus');
      expect(cmp.find('.is-focused').length).toBe(1);
      cmp.find('#test-input-simple').simulate('blur');
      expect(cmp.find('.is-focused').length).toBe(0);
    });

  });

  describe('number input change', () => {
    it('calls onChange when value changes', () => {
      cmp = shallow(
        <TextInput
          type="number"
          label="Test Input"
          id="test-input-simple"
          onChange={mockOnChange}
          onBlur={mockOnBlur}
        />,
      );
      cmp.find('#test-input-simple').simulate('change', {target: {value: '123'}});
      expect(mockOnChange).toHaveBeenCalledWith(123);
    });
  });
});
