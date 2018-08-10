/// <reference types="react" />
import React from 'react';
export interface SegmentWrapperProps {
    children?: any;
    editing?: boolean;
    onSubmit?: () => boolean;
}
export default class SegmentWrapper extends React.Component<SegmentWrapperProps, {
    editing: boolean;
}> {
    static defaultProps: {
        editing: boolean;
    };
    state: {
        editing: boolean;
    };
    private self;
    render(): JSX.Element;
    componentWillUnmount(): void;
    componentDidMount(): void;
    onEdit: () => void;
    submit: (event: MouseEvent) => void;
}
