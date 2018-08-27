import isNumber from 'lodash/isNumber';
import React, { SFC } from 'react';
import {
  ColorChangeHandler,
  ColorResult,
  InjectedColorProps,
  RGBColor,
} from 'react-color';
import color from 'react-color/lib/helpers/color';
import cn from '../utilities/classnames';

import ColorSwatch from './colorSwatch';
import HexColorControl from './hexColorControl';
import RGBColorControls from './rgbColorControls';

import Styles from '../styles/color-palette.module.scss';
const exists = (...values: Array<any>) =>
  values.some(value => value || isNumber(value));

export type ChangeHandlerType = (
  onChange: (...args: Array<any>) => void
) => ColorChangeHandler;

export const createChangeHandler: ChangeHandlerType = onChange => (
  result: ColorResult
) => {
  if (result.hex && color.isValidHex(result.hex)) {
    onChange({ hex: result.hex, source: 'hex' });
  } else if (exists(result.rgb)) {
    onChange({ ...result.rgb });
  }
};

const ColorControls: SFC<{ colorProps: InjectedColorProps }> = ({
  colorProps,
}) => {
  const handleChange = createChangeHandler(colorProps.onChange);
  return (
    <div className={cn('ColorPalette-controls', 'controls', Styles.controls)}>
      <ColorSwatch current color={colorProps.hex} />
      <HexColorControl hex={colorProps.hex} onChange={handleChange} />
      <RGBColorControls rgb={colorProps.rgb} onChange={handleChange} />
    </div>
  );
};

export default ColorControls;
