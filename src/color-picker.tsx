/* eslint jsx-a11y/label-has-for: 0, jsx-a11y/aria-role: 0 */

import React from 'react';
import classnames from './utilities/classnames';

import ColorPalette from './color-palette';

import { ColorResult } from 'react-color';
import { Icon } from './icon';
import Styles from './styles/color-picker.module.scss';
import { TextInput } from './text-input';

export function getPalettePosition(
  clientHeight: number,
  paletteTriggerRect: ClientRect,
  initialPaletteRect: ClientRect
) {
  const triggerSpacing = 5;
  const newTop =
    clientHeight >= initialPaletteRect.bottom
      ? initialPaletteRect.top + paletteTriggerRect.height + triggerSpacing
      : initialPaletteRect.top - initialPaletteRect.height - triggerSpacing;

  const newLeft = initialPaletteRect.left - initialPaletteRect.width / 2;

  return { top: newTop, left: newLeft };
}

export interface ColorPickerPropsTypes {
  labelText?: string;
  resetValue?: string; // reset color value and show/hide reset anchor
  value: string; // the actual value selected
  onChange: (value: string) => void; // callback for what happens on change
}
export class ColorPicker extends React.Component<
  ColorPickerPropsTypes,
  {
    displayColorPalette: boolean;
    top: number;
    left: number;
  }
> {
  public state = {
    displayColorPalette: false,
    left: 0,
    top: 0,
  };
  public paletteTriggerRect: ClientRect = null;
  public colorPaletteButton: Element;

  public onReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { onChange, resetValue } = this.props;
    event.preventDefault();
    onChange(resetValue);
  };

  public handleChangeFromTextInput = (
    e: React.MouseEvent<HTMLButtonElement>,
    color: string
  ) => {
    if (!color && !e) {
      this.props.onChange('');
    } else {
      this.props.onChange(e.currentTarget.value);
    }
  };

  public handleChangeFromColorPalette = (color: ColorResult) => {
    this.props.onChange(color.hex);
  };

  public toggleColorPalette = () => {
    const displayColorPalette = !this.state.displayColorPalette;

    // not in didMount so we can only compute this if we need it
    this.paletteTriggerRect = this.colorPaletteButton.getBoundingClientRect();
    const initialTop = this.paletteTriggerRect.top;
    const initialLeft =
      this.paletteTriggerRect.left + this.paletteTriggerRect.width / 2;

    this.setState({ displayColorPalette, top: initialTop, left: initialLeft });
  };

  // Need to do some calculations to determine if this is being clipped by the window edge
  // Also scoot it left by half its width to center it on the "bubble"
  // Note: this needs to run AFTER toggleColorPalette so the palette can be rendered and
  //   its initial size and position can be calculated.
  public handleColorPaletteMount = (paletteRect: ClientRect) => {
    this.setState(
      getPalettePosition(
        document.documentElement.clientHeight,
        this.paletteTriggerRect ||
          this.colorPaletteButton.getBoundingClientRect(),
        paletteRect
      )
    );
  };

  public render() {
    const { labelText, resetValue, value } = this.props;
    const { displayColorPalette, top, left } = this.state;
    return (
      <div className={Styles['picker-wrapper']}>
        <label>{labelText}</label>
        <div className={Styles['inputs-wrapper']}>
          {(resetValue || typeof resetValue === 'string') && (
            <Icon
              className={Styles['reset-button']}
              type="reload"
              data-role="reset-button"
              title="Reset to Default Color"
              onClick={this.onReset}
            />
          )}
          <TextInput
            placeholder="auto"
            type={'text'}
            id="color-picker"
            value={value}
            onChange={this.handleChangeFromTextInput}
          />
          <button
            className={Styles.bubble}
            data-role="color-picker-trigger"
            style={{ backgroundColor: value }}
            onClick={this.toggleColorPalette}
            ref={element => {
              this.colorPaletteButton = element;
            }}
          />
          {displayColorPalette && (
            <ColorPalette
              toggleColorPalette={this.toggleColorPalette}
              color={value}
              onChange={this.handleChangeFromColorPalette}
              onMount={this.handleColorPaletteMount}
              top={top}
              left={left}
            />
          )}
        </div>
        <div className="cp-default" role="color-picker-container" />
      </div>
    );
  }
}

export default ColorPicker;
