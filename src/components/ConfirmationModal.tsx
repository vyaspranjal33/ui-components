import React, { Component } from 'react';
import cn from '../utilities/classnames';
import {
  ModalProps,
  modalWillReceiveProps,
} from '../utilities/modals';

export interface ConfirmationModalProps extends ModalProps {
  renderActions: string | (() => React.ReactNode);
  renderBody: string | (() => React.ReactNode);
  renderHeader: string | (() => React.ReactNode);
}

const evaluateRenderProp: (prop: string | (() => React.ReactNode)) => React.ReactNode = (prop) => {
  return typeof prop === 'string' ? prop : prop();
};

export class ConfirmationModal extends Component<ConfirmationModalProps> {
  public static defaultProps: Partial<ConfirmationModalProps> = { bodyNode: document.body };

  public componentWillReceiveProps(nextProps: ConfirmationModalProps) {
    modalWillReceiveProps(nextProps, this.props);
  }

  public render() {
    return (
      <div className={cn('sg-modal', { 'is-visible': this.props.isOpen })}>
        <div className="conf-alert sg-modal-content">
          <h2 className="conf-alert-header">
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
    );
  }
}

export default ConfirmationModal;
