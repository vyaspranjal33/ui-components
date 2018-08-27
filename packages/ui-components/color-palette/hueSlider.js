import React from 'react';
import { Hue } from 'react-color/lib/components/common';
import Styles from '../styles/color-palette.module.scss';
const HueSlider = (colorProps) => (React.createElement("div", { className: Styles.hue },
    React.createElement(Hue, Object.assign({}, colorProps, { onChange: colorProps.onChange }))));
export default HueSlider;
//# sourceMappingURL=hueSlider.js.map