import React from 'react';
import { ColorChangeHandler, HSLColor, InjectedColorProps } from 'react-color';
import { Hue } from 'react-color/lib/components/common';
import Styles from '../styles/color-palette.module.scss';

const HueSlider = (colorProps: InjectedColorProps) => (
  <div className={Styles.hue}>
    <Hue {...colorProps} onChange={colorProps.onChange} />
  </div>
);

export default HueSlider;
