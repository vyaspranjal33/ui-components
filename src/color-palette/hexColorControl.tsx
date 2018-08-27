import React from 'react';
import { ColorChangeHandler, RGBColor } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';
import Styles from '../styles/color-palette.module.scss';
import cn from '../utilities/classnames';

export interface HexColorControlProps {
  hex: string;
  onChange: ColorChangeHandler;
}

const HexColorControl = ({ hex, onChange }: HexColorControlProps) => (
  <div className={cn('HexColorControl', Styles['hex-color-control'])}>
    <EditableInput label="hex" value={hex} onChange={onChange} />
  </div>
);

export default HexColorControl;
