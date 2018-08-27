import isNumber from 'lodash/isNumber';
import React from 'react';
import color from 'react-color/lib/helpers/color';
import cn from '../utilities/classnames';
import ColorSwatch from './colorSwatch';
import HexColorControl from './hexColorControl';
import RGBColorControls from './rgbColorControls';
import Styles from '../styles/color-palette.module.scss';
const exists = (...values) => values.some(value => value || isNumber(value));
export const createChangeHandler = onChange => (result) => {
    if (result.hex && color.isValidHex(result.hex)) {
        onChange({ hex: result.hex, source: 'hex' });
    }
    else if (exists(result.rgb)) {
        onChange(Object.assign({}, result.rgb));
    }
};
const ColorControls = ({ colorProps, }) => {
    const handleChange = createChangeHandler(colorProps.onChange);
    return (React.createElement("div", { className: cn('ColorPalette-controls', 'controls', Styles.controls) },
        React.createElement(ColorSwatch, { current: true, color: colorProps.hex }),
        React.createElement(HexColorControl, { hex: colorProps.hex, onChange: handleChange }),
        React.createElement(RGBColorControls, { rgb: colorProps.rgb, onChange: handleChange })));
};
export default ColorControls;
//# sourceMappingURL=colorControls.js.map