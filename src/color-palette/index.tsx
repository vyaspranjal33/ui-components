import React from 'react';
import { Color, CustomPicker, HSLColor, RGBColor } from 'react-color';
import { Saturation } from 'react-color/lib/components/common';
import {
  ExportedColorProps,
  InjectedColorProps,
} from 'react-color/lib/components/common/ColorWrap';

import ColorControls from './colorControls';
import ColorStorage from './colorStorage';
import DismissableBackground from './dismissableBackground';
import HueSlider from './hueSlider';

import Styles from '../styles/color-palette.module.scss';

export interface ColorPaletteProps {
  onMount: (rectangle: any) => void;
  toggleColorPalette: (rectangle: any) => void;
  top?: number;
  left?: number;
}

class ColorPalette extends React.Component<
  ColorPaletteProps & InjectedColorProps
> {
  public palette: Element;
  public componentDidMount() {
    this.props.onMount(this.palette && this.palette.getBoundingClientRect());
  }

  public render() {
    const { toggleColorPalette, top = 0, left = 0 } = this.props;
    const injectedProps = {
      hex: this.props.hex,
      hsl: this.props.hsl,
      onChange: this.props.onChange,
      rgb: this.props.rgb,
    };
    return (
      <DismissableBackground onClick={toggleColorPalette}>
        <div
          className={Styles['color-palette']}
          style={{ top, left }}
          ref={p => {
            this.palette = p;
          }}
        >
          <div className={Styles.saturation}>
            <Saturation {...this.props} onChange={this.props.onChange} />
          </div>
          <HueSlider {...injectedProps} />
          <ColorControls colorProps={injectedProps} />
          <ColorStorage
            color={injectedProps.hex}
            onChange={injectedProps.onChange}
          />
        </div>
      </DismissableBackground>
    );
  }
}

export default CustomPicker<ColorPaletteProps>(ColorPalette);
