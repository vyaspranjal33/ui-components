import React from 'react';
export interface UnsubscribeGroupAddEditProps {
    breadcrumbHref?: string;
    className?: string;
    groupDescription: string;
    groupName: string;
    id?: number;
    isDeleteGroupModalOpen?: boolean;
    isEdit?: boolean;
    isGroupDisplayedOnIndex?: boolean;
    onDeleteGroupModalClosed?: (e: any) => void;
    onDeleteGroupModalOpened?: (e: any) => void;
    onGroupDescriptionInputChanged: () => void;
    onGroupDisplayedOnIndexChanged: () => void;
    onGroupNameInputChanged: () => void;
    onDeleteUnsubscribeGroup?: () => void;
    onSaveUnsubscribeGroup: () => void;
    unsubscribes?: number;
}
export declare const UnsubscribeGroupAddEdit: React.SFC<UnsubscribeGroupAddEditProps>;
export default UnsubscribeGroupAddEdit;
