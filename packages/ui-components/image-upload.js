import React, { Fragment, PureComponent } from 'react';
import Dropzone from './dropzone';
import FileUpload, { DroppedFile, FileSelect } from './file-upload';
class ImageUpload extends PureComponent {
    constructor() {
        super(...arguments);
        this.validateFile = (files) => {
            const { maximumImageBytes } = this.props;
            if (files.length > 1) {
                return false;
            }
            const file = files[0];
            const isDataTransferItem = file instanceof DataTransferItem;
            // can't validate size of data transfer item, .getAsFile() returns null
            if (isDataTransferItem) {
                return true;
            }
            if (file.size > maximumImageBytes) {
                return false;
            }
            return true;
        };
    }
    render() {
        const { alert, clearOnDrop, onFileSelect, onInvalidFile, onRemove, } = this.props;
        return (React.createElement(FileUpload, { onFileSelect: onFileSelect, onInvalidFile: onInvalidFile, validateFile: this.validateFile, render: ({ hasFile, handleRemove, hovered, invalid, file, FileSelectLink, }) => (React.createElement(Dropzone, { active: hasFile, hovered: hovered, invalid: invalid, alert: alert }, file && !clearOnDrop ? (React.createElement(DroppedFile, { file: file, onRemove: handleRemove })) : (React.createElement(FileSelect, { icon: "image" },
                React.createElement(Fragment, null,
                    "Drag and drop your images here, or",
                    ' ',
                    React.createElement(FileSelectLink, null, "choose images to upload"),
                    "."))))), supportedType: 'image/gif,image/jpeg,image/png' }));
    }
}
export default ImageUpload;
//# sourceMappingURL=image-upload.js.map