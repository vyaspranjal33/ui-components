import React from 'react';
import Icon from '../icon';
import Styles from '../styles/color-palette.module.scss';
import cn from '../utilities/classnames';
const ColorSwatch = ({ color, current = false, onClick, removeColor, }) => {
    let swatch;
    return (React.createElement("article", { className: cn(Styles['color-swatch'], {
            [Styles['current-color-swatch']]: current,
            [Styles['saved-color-swatch']]: removeColor,
        }), ref: ref => {
            swatch = ref;
        }, style: {
            background: color,
        }, onClick: event => {
            if (event.target !== swatch) {
                return;
            }
            onClick(color, event);
        } }, removeColor && (React.createElement("button", { className: Styles['remove-color'], onClick: removeColor },
        React.createElement(Icon, { type: "x" })))));
};
export default ColorSwatch;
//# sourceMappingURL=colorSwatch.js.map