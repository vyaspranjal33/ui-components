import React, { Component } from 'react';
import { EditableInput } from 'react-color/lib/components/common';
import cn from '../utilities/classnames';
import Styles from '../styles/color-palette.module.scss';
class RGBColorControls extends Component {
    constructor() {
        super(...arguments);
        // Combine rgb values back again since event only has 1 value
        this.handleChange = (color, event) => {
            const { rgb, onChange } = this.props;
            const newRGB = Object.assign({}, rgb, color);
            onChange({ rgb: Object.assign({}, rgb, color) });
        };
    }
    render() {
        const { rgb, onChange } = this.props;
        return (React.createElement("div", { className: cn('RGBCColorControls', Styles['rgb-color-controls']) },
            React.createElement("div", { className: cn(Styles['rgb-color-control']) },
                React.createElement(EditableInput, { label: "r", value: rgb.r, onChange: this.handleChange })),
            React.createElement("div", { className: cn(Styles['rgb-color-control']) },
                React.createElement(EditableInput, { label: "g", value: rgb.g, onChange: this.handleChange })),
            React.createElement("div", { className: cn(Styles['rgb-color-control']) },
                React.createElement(EditableInput, { label: "b", value: rgb.b, onChange: this.handleChange }))));
    }
}
export default RGBColorControls;
//# sourceMappingURL=rgbColorControls.js.map