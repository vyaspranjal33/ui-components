import React, { Component } from 'react';
import cn from './utilities/classnames';
import { ImageLibraryDetailsPane } from './image-library-details-pane';
import { ImageLibraryThumbnailList } from './image-library-thumbnail-list';
import ImageUpload from './image-upload';
import Styles from './styles/image-library.module.scss';
export class ImageLibrary extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedImage: null,
        };
        this.onImageSelected = (selectedImage) => {
            const { onImageSelected } = this.props;
            this.setState({ selectedImage });
            if (onImageSelected) {
                onImageSelected(selectedImage);
            }
        };
        this.onImageDeselected = (deselectedImage) => {
            const { onImageDeselected } = this.props;
            this.setState({ selectedImage: null });
            if (onImageDeselected) {
                onImageDeselected(deselectedImage);
            }
        };
        this.onFileSelect = (files) => {
            const { onUpload } = this.props;
            onUpload(files[0]);
        };
        this.onInvalidFile = (files) => {
            // no great way currently to communicate back specifically why the file was invalid,
            // probably best to leave it to the client to figure out why for now.
            // i don't want to go mucking about the internals in the file-upload to address
            // this without a larger discussion first.
            this.props.onUploadFailure(files[0]);
        };
    }
    componentDidMount() {
        const { initialImage } = this.props;
        if (initialImage) {
            this.onImageSelected(initialImage);
        }
    }
    render() {
        const { dateFormatter, detailsAlert, images, maximumImageBytes, renderImageDetailsActions, uploadAlert, } = this.props;
        const { selectedImage } = this.state;
        return (React.createElement("div", { className: Styles.wrap },
            React.createElement("div", { className: cn(Styles['list-container'], {
                    [Styles['details-open']]: !!selectedImage,
                }) },
                React.createElement(ImageUpload, { clearOnDrop: true, alert: uploadAlert, onFileSelect: this.onFileSelect, onInvalidFile: this.onInvalidFile, maximumImageBytes: maximumImageBytes }),
                React.createElement(ImageLibraryThumbnailList, { images: images, onThumbnailClick: this.onImageSelected, selectedImage: selectedImage })),
            selectedImage && (React.createElement(ImageLibraryDetailsPane, { alert: detailsAlert, dateFormatter: dateFormatter, onClose: this.onImageDeselected, image: selectedImage, renderActions: renderImageDetailsActions }))));
    }
}
export default ImageLibrary;
//# sourceMappingURL=image-library.js.map