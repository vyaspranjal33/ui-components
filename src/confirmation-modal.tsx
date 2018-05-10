import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './icon';
import { IconType } from './types/icons';
import cn from './utilities/classnames';
import {
  ModalProps,
  modalWillReceiveProps,
} from './utilities/modals';

export interface ConfirmationModalProps extends ModalProps {
  iconType?: IconType;
  isOpen?: boolean;
  modalContainer?: Element;
  renderActions: string | (() => React.ReactNode);
  renderBody: string | (() => React.ReactNode);
  renderHeader: string | (() => React.ReactNode);
}

const evaluateRenderProp: (prop: string | (() => React.ReactNode)) => React.ReactNode = (prop) => {
  return typeof prop === 'string' ? prop : prop();
};

export class ConfirmationModal extends Component<ConfirmationModalProps> {
  public static defaultProps: Partial<ConfirmationModalProps> = {
    bodyNode: document.body,
    modalContainer: document.body,
  };

  private primitiveProps: any;

  constructor(props: ConfirmationModalProps) {
    super(props);
    const {
      iconType,
      modalContainer,
      renderBody,
      renderActions,
      renderHeader,
      isOpen,
      bodyNode,
      ...primitiveProps,
    } = props;
    this.primitiveProps = primitiveProps;
  }

  public componentWillReceiveProps(nextProps: ConfirmationModalProps) {
    modalWillReceiveProps(nextProps, this.props);
  }

  public render() {
    return ReactDOM.createPortal(
      <div className={cn('sg-modal', { 'is-visible': this.props.isOpen })} {...this.primitiveProps}>
        <div className="conf-alert sg-modal-content">
          <h2 className={cn('conf-alert-header', {'conf-alert-header-with-icon': !!this.props.iconType})}>
            {
              !!this.props.iconType &&
                <Icon type={this.props.iconType} />
            }
            {evaluateRenderProp(this.props.renderHeader)}
          </h2>
          <div className="conf-alert-body">
            <p className="conf-alert-text">
              {evaluateRenderProp(this.props.renderBody)}
            </p>
          </div>
          <div className="conf-alert-actions">
            {evaluateRenderProp(this.props.renderActions)}
          </div>
        </div>
      </div>
    , this.props.modalContainer);
  }
}

export default ConfirmationModal;
