import React, { Component } from 'react';
import ImageUpload from './image-upload';
// add to this when each subcomponent is created
export class ImageLibrary extends Component {
    constructor() {
        super(...arguments);
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
        const { maximumImageBytes, uploadAlert } = this.props;
        return (React.createElement(ImageUpload, { clearOnDrop: true, alert: uploadAlert, onFileSelect: this.onFileSelect, onInvalidFile: this.onInvalidFile, maximumImageBytes: maximumImageBytes }));
    }
}
export const ERROR_CODES = {
    FILE_SIZE: 'imageLibrary.errors.fileSize',
};
export default ImageLibrary;
//# sourceMappingURL=image-library.js.map