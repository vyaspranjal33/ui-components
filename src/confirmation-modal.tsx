import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './icon';
import { IconType } from './types/icons';
import cn from './utilities/classnames';
import { ModalProps, modalWillReceiveProps } from './utilities/modals';

export interface ConfirmationModalProps extends ModalProps {
  iconType?: IconType;
  isOpen?: boolean;
  modalContainer?: Element;
  renderActions: string | (() => React.ReactNode);
  renderBody: string | (() => React.ReactNode);
  renderHeader: string | (() => React.ReactNode);
  className?: string;
}

const evaluateRenderProp: (
  prop: string | (() => React.ReactNode)
) => React.ReactNode = prop => {
  return typeof prop === 'string' ? prop : prop();
};

export class ConfirmationModal extends Component<ConfirmationModalProps> {
  public static defaultProps: Partial<ConfirmationModalProps> = {
    bodyNode: document.body,
    modalContainer: document.body,
  };

  public componentWillReceiveProps(nextProps: ConfirmationModalProps) {
    modalWillReceiveProps(nextProps, this.props);
  }

  public render() {
    const {
      iconType,
      modalContainer,
      renderBody,
      renderActions,
      renderHeader,
      isOpen,
      bodyNode,
      className,
      ...attributes
    } = this.props;

    return ReactDOM.createPortal(
      <div
        className={cn('sg-modal', className, { 'is-visible': isOpen })}
        {...attributes}
      >
        <div className="conf-alert sg-modal-content">
          <h2
            className={cn('conf-alert-header', {
              'conf-alert-header-with-icon': !!iconType,
            })}
          >
            {!!iconType && <Icon type={iconType} />}
            {evaluateRenderProp(renderHeader)}
          </h2>
          <div className="conf-alert-body">
            <p className="conf-alert-text">{evaluateRenderProp(renderBody)}</p>
          </div>
          <div className="conf-alert-actions">
            {evaluateRenderProp(renderActions)}
          </div>
        </div>
      </div>,
      modalContainer
    );
  }
}

export default ConfirmationModal;
