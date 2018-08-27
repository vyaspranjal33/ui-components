/// <reference types="react" />
import React from 'react';
export interface SavedColorListProps {
    colors: Array<{
        color: string;
        key: string;
    }>;
    addColor: (event: React.MouseEvent<HTMLElement>) => void;
    removeColor: (event: React.MouseEvent<HTMLElement>, key: string) => void;
    onChange: (color: string, e: React.MouseEvent<HTMLElement>) => void;
}
declare const SavedColorList: ({ colors, addColor, removeColor, onChange, }: SavedColorListProps) => JSX.Element;
export default SavedColorList;
