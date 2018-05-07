import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Styles from './styles/center-modal.module.scss';
import cn from './utilities/classnames';
import { modalWillReceiveProps, } from './utilities/modals';
const evaluateRenderProp = (prop) => {
    return prop instanceof Function ? prop() : prop;
};
export class CenterModal extends Component {
    componentWillReceiveProps(nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    }
    render() {
        // Using <> instead of <Fragment> is breaking the linter.
        return ReactDOM.createPortal(React.createElement(Fragment, null,
            React.createElement("div", { className: cn(Styles['center-modal'], { [Styles['is-visible']]: this.props.open, [Styles['is-large']]: this.props.large }) },
                this.props.hasX &&
                    (React.createElement("i", { className: `${Styles['sg-icon']} ${Styles['sg-icon-x']}`, "data-role": "close-center-modal", onClick: this.props.onClose })),
                this.props.renderHeader && React.createElement("h1", null, evaluateRenderProp(this.props.renderHeader)),
                evaluateRenderProp(this.props.renderBody),
                this.props.renderFooter &&
                    (React.createElement("div", { className: Styles['modal-footer'] }, evaluateRenderProp(this.props.renderFooter)))),
            React.createElement("div", { className: cn(Styles['modal-mask'], { [Styles['is-visible']]: this.props.open }), onClick: this.props.onClose })), this.props.modalContainer);
    }
}
CenterModal.defaultProps = {
    bodyNode: document.body,
    hasX: false,
    large: false,
    modalContainer: document.body,
};
export default CenterModal;
//# sourceMappingURL=center-modal.js.map