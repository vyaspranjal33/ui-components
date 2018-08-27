/// <reference types="react" />
import { SFC } from 'react';
import { ColorChangeHandler, InjectedColorProps } from 'react-color';
export declare type ChangeHandlerType = (onChange: (...args: Array<any>) => void) => ColorChangeHandler;
export declare const createChangeHandler: ChangeHandlerType;
declare const ColorControls: SFC<{
    colorProps: InjectedColorProps;
}>;
export default ColorControls;
