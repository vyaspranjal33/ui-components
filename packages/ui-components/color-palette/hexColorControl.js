import React from 'react';
import { EditableInput } from 'react-color/lib/components/common';
import Styles from '../styles/color-palette.module.scss';
import cn from '../utilities/classnames';
const HexColorControl = ({ hex, onChange }) => (React.createElement("div", { className: cn('HexColorControl', Styles['hex-color-control']) },
    React.createElement(EditableInput, { label: "hex", value: hex, onChange: onChange })));
export default HexColorControl;
//# sourceMappingURL=hexColorControl.js.map