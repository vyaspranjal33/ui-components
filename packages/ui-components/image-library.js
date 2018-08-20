import React, { Component } from 'react';
import { ImageLibraryThumbnailList } from './image-library-thumbnail-list';
import ImageUpload from './image-upload';
// add to this when each subcomponent is created
export class ImageLibrary extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedImageId: null,
        };
        this.onThumbnailClick = (selectedImageId) => {
            this.setState({ selectedImageId });
        };
        this.onFileSelect = (files) => {
            const { onUpload } = this.props;
            onUpload(files[0]);
        };
        this.onInvalidFile = (files) => {
            const { onUploadFailure } = this.props;
            if (onUploadFailure) {
                onUploadFailure(ERROR_CODES.FILE_SIZE);
            }
        };
    }
    render() {
        const { images, maximumImageBytes, uploadAlert } = this.props;
        return (React.createElement("article", null,
            React.createElement(ImageUpload, { clearOnDrop: true, alert: uploadAlert, onFileSelect: this.onFileSelect, onInvalidFile: this.onInvalidFile, maximumImageBytes: maximumImageBytes }),
            React.createElement(ImageLibraryThumbnailList, { images: images, onThumbnailClick: this.onThumbnailClick, selectedImageId: this.state.selectedImageId })));
    }
}
export const ERROR_CODES = {
    FILE_SIZE: 'imageLibrary.errors.fileSize',
};
export default ImageLibrary;
//# sourceMappingURL=image-library.js.map