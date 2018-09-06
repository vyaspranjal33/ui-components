import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './icon';
import Styles from './styles/confirmation-modal.module.scss';
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

  public componentDidUpdate(prevProps: ConfirmationModalProps) {
    modalWillReceiveProps(this.props, prevProps);
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
        className={cn('sg-modal', Styles['sg-modal'], className, {
          [Styles['is-visible']]: this.props.isOpen,
          'is-visible': this.props.isOpen,
        })}
        {...attributes}
      >
        <div
          className={cn(
            'conf-alert',
            Styles['conf-alert'],
            'sg-modal-content',
            Styles['sg-modal-content']
          )}
        >
          <h2
            className={cn('conf-alert-header', Styles['conf-alert-header'], {
              [Styles['conf-alert-header-with-icon']]: !!this.props.iconType,
              'conf-alert-header-with-icon': !!this.props.iconType,
            })}
          >
            {!!this.props.iconType && <Icon type={this.props.iconType} />}
            {evaluateRenderProp(this.props.renderHeader)}
          </h2>
          <div className={cn('conf-alert-body', Styles['conf-alert-body'])}>
            <p className={cn('conf-alert-text', Styles['conf-alert-text'])}>
              {evaluateRenderProp(this.props.renderBody)}
            </p>
          </div>
          <div
            className={cn('conf-alert-actions', Styles['conf-alert-actions'])}
          >
            {evaluateRenderProp(this.props.renderActions)}
          </div>
        </div>
      </div>,
      modalContainer
    );
  }
}

export default ConfirmationModal;
