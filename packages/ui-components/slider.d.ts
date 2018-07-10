import React from 'react';
export interface SliderProps {
    value: number;
    id?: string;
    label?: boolean;
    onChange?: (event: any, value?: number) => void;
}
export declare const Slider: React.SFC<SliderProps>;
export declare class StatefulSlider extends React.Component<SliderProps, {
    value: number;
}> {
    state: {
        value: number;
    };
    handleChange: (event: any) => void;
    render(): JSX.Element;
}
export default Slider;
