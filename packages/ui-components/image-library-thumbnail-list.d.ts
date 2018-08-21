/// <reference types="react" />
import { Component } from 'react';
import { SGLibraryImage } from './image-library';
export interface ImageLibraryThumbnailListProps {
    images: Array<SGLibraryImage>;
    onThumbnailClick: (image?: SGLibraryImage) => void;
    selectedImage?: SGLibraryImage;
}
export declare class ImageLibraryThumbnailList extends Component<ImageLibraryThumbnailListProps> {
    render(): JSX.Element;
}
export default ImageLibraryThumbnailList;
