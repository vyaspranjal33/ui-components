import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './icon';

import cn from './utilities/classnames';
import { ModalProps, modalWillReceiveProps } from './utilities/modals';

import Styles from './styles/fullscreen-modal.module.scss';

export interface FullScreenModelProps extends ModalProps {
  children?: React.ReactNode;
  className?: string;
  hasPadding?: boolean;
  isOpen?: boolean;
  onClose?: (event: any) => void;
  modalContainer?: Element;
  renderHeaderActions?: () => React.ReactNode;
  title: string;
  tooltipText?: string;
}

export class FullscreenModal extends Component<FullScreenModelProps> {
  public static defaultProps: Partial<FullScreenModelProps> = {
    bodyNode: document.body,
    hasPadding: true,
    modalContainer: document.body,
    onClose: () => {},
  };

  public componentDidUpdate(prevProps: FullScreenModelProps) {
    modalWillReceiveProps(this.props, prevProps);
  }

  public render() {
    const {
      bodyNode,
      children,
      className,
      hasPadding,
      isOpen,
      modalContainer,
      onClose,
      renderHeaderActions,
      title,
      tooltipText,
      ...attributes
    } = this.props;

    return ReactDOM.createPortal(
      <div
        className={cn(
          'modal-fullscreen',
          Styles['modal-fullscreen'],
          { [Styles['is-open']]: isOpen },
          className
        )}
        {...attributes}
      >
        <header className={Styles['modal-fullscreen-header']}>
          <a className={Styles['modal-close']} onClick={onClose}>
            <Icon type="x" />
          </a>

          <h2>
            {title}
            {tooltipText && (
              <span data-tooltip={tooltipText} data-tooltip-pos="down">
                <Icon type="info-circle" />
              </span>
            )}
          </h2>
          {renderHeaderActions && renderHeaderActions()}
        </header>
        <div className={cn('modal-content', { 'has-padding': hasPadding })}>
          {children}
        </div>
      </div>,
      modalContainer
    );
  }
}

export default FullscreenModal;
