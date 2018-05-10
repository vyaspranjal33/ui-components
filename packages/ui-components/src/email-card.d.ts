/// <reference types="react" />
import React from 'react';
import { Statistic } from './statistics';
export interface EmailCardDetail {
    label: string;
    value: string;
    renderEditDetailLink?: (value: string) => any;
}
export interface EmailCardContentProps {
    thumbnailUrl: string;
    onContentEditClick: (event: any) => void;
}
export interface EmailCardAddButtonProps {
    onClick: (event: any) => void;
}
export declare const EmailCardAddButton: React.SFC<EmailCardAddButtonProps>;
export interface EmailCardProps {
    details?: EmailCardDetail[];
    editing?: boolean;
    editable?: boolean;
    live?: boolean;
    n: number;
    onContentEditClick?: (event: any) => void;
    onSaveAlertClick?: (event: any) => void;
    paused?: boolean;
    renderSendTimeLink?: (value: string) => any;
    renderAlert?: () => any;
    sendTimeValue?: string;
    statistics?: Statistic[];
    thumbnailUrl?: string;
}
export declare class EmailCard extends React.Component<EmailCardProps> {
    static defaultProps: {
        editable: boolean;
        editing: boolean;
        live: boolean;
        paused: boolean;
        renderAlert: boolean;
    };
    private primitiveProps;
    constructor(props: EmailCardProps);
    render(): JSX.Element;
}
export default EmailCard;
