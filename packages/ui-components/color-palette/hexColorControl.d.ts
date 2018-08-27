/// <reference types="react" />
import { ColorChangeHandler } from 'react-color';
export interface HexColorControlProps {
    hex: string;
    onChange: ColorChangeHandler;
}
declare const HexColorControl: ({ hex, onChange }: HexColorControlProps) => JSX.Element;
export default HexColorControl;
