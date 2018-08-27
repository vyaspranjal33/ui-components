import React, { Component } from 'react';
import { ColorChangeHandler, ColorResult, RGBColor } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';
import cn from '../utilities/classnames';

import Styles from '../styles/color-palette.module.scss';

export interface RGBColorControlsProp {
  rgb: RGBColor;
  onChange: ColorChangeHandler;
}
class RGBColorControls extends Component<RGBColorControlsProp> {
  // Combine rgb values back again since event only has 1 value
  public handleChange = (
    color: Partial<RGBColor>,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { rgb, onChange } = this.props;
    const newRGB = { ...rgb, ...color };
    onChange({ rgb: { ...rgb, ...color } } as ColorResult);
  };

  public render() {
    const { rgb, onChange } = this.props;
    return (
      <div className={cn('RGBCColorControls', Styles['rgb-color-controls'])}>
        <div className={cn(Styles['rgb-color-control'])}>
          <EditableInput
            label="r"
            value={rgb.r}
            onChange={this.handleChange as ColorChangeHandler}
          />
        </div>
        <div className={cn(Styles['rgb-color-control'])}>
          <EditableInput
            label="g"
            value={rgb.g}
            onChange={this.handleChange as ColorChangeHandler}
          />
        </div>
        <div className={cn(Styles['rgb-color-control'])}>
          <EditableInput
            label="b"
            value={rgb.b}
            onChange={this.handleChange as ColorChangeHandler}
          />
        </div>
      </div>
    );
  }
}

export default RGBColorControls;
