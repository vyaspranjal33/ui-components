import React, { Component } from 'react';
import Icon from './icon';
import Styles from './styles/image-library-details-pane.module.scss';
export class ImageLibraryDetailsPane extends Component {
    constructor() {
        super(...arguments);
        this.onClose = () => {
            const { image, onClose } = this.props;
            onClose(image);
        };
    }
    render() {
        const { alert, dateFormatter, image, renderActions } = this.props;
        const dimensionsKnown = image.width && image.height;
        return (React.createElement("div", { className: Styles.wrap },
            !!alert && React.createElement("div", { className: Styles['alert-wrap'] }, alert),
            React.createElement("a", { href: "javascript: void 0", onClick: this.onClose, className: Styles['x-wrap'] },
                React.createElement(Icon, { className: Styles.x, type: "x" })),
            React.createElement("h3", null, "Image Details"),
            React.createElement("div", { className: Styles['img-wrap'] },
                React.createElement("img", { src: image.originalUrl })),
            React.createElement("div", { className: Styles['metadata-wrap'] },
                React.createElement("h3", null, "File Name: "),
                React.createElement("p", { className: "small" }, image.name)),
            image.created && (React.createElement("div", { className: Styles['metadata-wrap'] },
                React.createElement("h3", null, "Upload: "),
                React.createElement("p", { className: "small" }, dateFormatter(image.created)))),
            dimensionsKnown && (React.createElement("div", { className: Styles['metadata-wrap'] },
                React.createElement("h3", null, "Dimensions: "),
                React.createElement("p", { className: "small" },
                    `${image.width} x ${image.height}`,
                    " px"))),
            React.createElement("div", { className: Styles['metadata-wrap'] },
                React.createElement("h3", null, "Image URL: "),
                React.createElement("p", { className: "small" }, image.originalUrl)),
            renderActions(image, this.onClose)));
    }
}
export default ImageLibraryDetailsPane;
//# sourceMappingURL=image-library-details-pane.js.map