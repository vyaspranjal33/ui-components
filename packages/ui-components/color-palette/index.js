import React from 'react';
import { CustomPicker } from 'react-color';
import { Saturation } from 'react-color/lib/components/common';
import ColorControls from './colorControls';
import ColorStorage from './colorStorage';
import DismissableBackground from './dismissableBackground';
import HueSlider from './hueSlider';
import Styles from '../styles/color-palette.module.scss';
class ColorPalette extends React.Component {
    componentDidMount() {
        this.props.onMount(this.palette && this.palette.getBoundingClientRect());
    }
    render() {
        const { toggleColorPalette, top = 0, left = 0 } = this.props;
        const injectedProps = {
            hex: this.props.hex,
            hsl: this.props.hsl,
            onChange: this.props.onChange,
            rgb: this.props.rgb,
        };
        return (React.createElement(DismissableBackground, { onClick: toggleColorPalette },
            React.createElement("div", { className: Styles['color-palette'], style: { top, left }, ref: p => {
                    this.palette = p;
                } },
                React.createElement("div", { className: Styles.saturation },
                    React.createElement(Saturation, Object.assign({}, this.props, { onChange: this.props.onChange }))),
                React.createElement(HueSlider, Object.assign({}, injectedProps)),
                React.createElement(ColorControls, { colorProps: injectedProps }),
                React.createElement(ColorStorage, { color: injectedProps.hex, onChange: injectedProps.onChange }))));
    }
}
export default CustomPicker(ColorPalette);
//# sourceMappingURL=index.js.map