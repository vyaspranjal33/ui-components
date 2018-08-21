import React, { Component } from 'react';
import cn from './utilities/classnames';
import Styles from './styles/image-library-thumbnail-list.module.scss';
export class ImageLibraryThumbnailList extends Component {
    render() {
        const { images, onThumbnailClick, selectedImage } = this.props;
        return (React.createElement("section", { className: Styles.list }, images.map(image => (React.createElement(ImageLibraryThumbnail, { key: image.id, image: image, isSelected: selectedImage === image, onClick: onThumbnailClick })))));
    }
}
class ImageLibraryThumbnail extends Component {
    constructor() {
        super(...arguments);
        this.onClick = () => {
            const { onClick, image } = this.props;
            onClick(image);
        };
    }
    render() {
        const { isSelected, image } = this.props;
        const { uploadPercent, thumbnailUrl } = image;
        const isUploading = uploadPercent !== undefined && uploadPercent < 99;
        return (React.createElement("div", { className: cn(Styles['thumbnail-container'], {
                [Styles['is-uploading']]: isUploading,
                [Styles['is-selected']]: isSelected,
            }), onClick: this.onClick },
            isUploading && (React.createElement("span", { className: Styles['upload-progress-container'] },
                React.createElement("div", { className: Styles['upload-progress'], style: { width: `${uploadPercent}%` } }))),
            React.createElement("img", { src: thumbnailUrl })));
    }
}
export default ImageLibraryThumbnailList;
//# sourceMappingURL=image-library-thumbnail-list.js.map