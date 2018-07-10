import React from 'react';
export interface UnsubscribeGroupCardProps {
    id: number;
    name: string;
    description: string;
    unsubscribes: number;
    isDisplayedOnPreferencesPage?: boolean;
    onClickEdit: (event: any) => void;
    onClickPreview: (event: any) => void;
    onClickUploadCsv: (event: any) => void;
    onClickExport: (event: any) => void;
    onClickManuallyAdd: (event: any) => void;
}
export declare const UnsubscribeGroupCard: React.SFC<UnsubscribeGroupCardProps>;
export { UnsubscribeGroupAddEdit } from './add-edit';
export { CreateNewGroupCard } from './create-new-group-card';
export default UnsubscribeGroupCard;
