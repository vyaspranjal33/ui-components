/// <reference types="react" />
import React from 'react';
export interface AddSavedColorButtonProps {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
declare const AddSavedColorButton: ({ onClick }: AddSavedColorButtonProps) => JSX.Element;
export default AddSavedColorButton;
