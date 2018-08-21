import React, { Component } from 'react';
import cn from './utilities/classnames';
import Styles from './styles/image-library-thumbnail-list.module.scss';
export class ImageLibraryThumbnailList extends Component {
    render() {
        const { images, onThumbnailClick, selectedImageId } = this.props;
        return (React.createElement("section", { className: Styles.list }, images.map(({ id, thumbnailUrl, uploadPercent }) => (React.createElement(ImageLibraryThumbnail, { key: id, url: thumbnailUrl, uploadPercent: uploadPercent, isSelected: selectedImageId === id, onClick: () => onThumbnailClick(id) })))));
    }
}
class ImageLibraryThumbnail extends Component {
    render() {
        const { isSelected, onClick, uploadPercent, url } = this.props;
        const isUploading = uploadPercent !== undefined && uploadPercent < 99;
        return (React.createElement("article", { className: cn(Styles['thumbnail-container'], {
                [Styles['is-uploading']]: isUploading,
                [Styles['is-selected']]: isSelected,
            }), onClick: onClick },
            isUploading && (React.createElement("span", { className: Styles['upload-progress-container'] },
                React.createElement("div", { className: Styles['upload-progress'], style: { width: `${uploadPercent}%` } }))),
            React.createElement("img", { src: url })));
    }
}
export default ImageLibraryThumbnailList;
//# sourceMappingURL=image-library-thumbnail-list.js.map