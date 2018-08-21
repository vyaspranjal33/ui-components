/// <reference types="react" />
import { Component } from 'react';
import { SGLibraryImage } from './image-library';
export interface ImageLibraryThumbnailListProps {
    images: Array<SGLibraryImage>;
    onThumbnailClick: (id: string) => void;
    selectedImageId?: string;
}
export declare class ImageLibraryThumbnailList extends Component<ImageLibraryThumbnailListProps> {
    render(): JSX.Element;
}
export default ImageLibraryThumbnailList;
