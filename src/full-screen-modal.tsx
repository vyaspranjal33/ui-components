import React, { Component } from 'react';
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
  title: string;
}

export class FullscreenModal extends Component<FullScreenModelProps> {
  public static defaultProps: Partial<FullScreenModelProps> = {
    bodyNode: document.body,
    hasPadding: true,
    modalContainer: document.body,
    onClose: () => {},
  };

  public componentWillReceiveProps(nextProps: FullScreenModelProps) {
    modalWillReceiveProps(nextProps, this.props);
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
      title,
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
        <header className="modal-fullscreen-header">
          <a className="modal-close" onClick={onClose}>
            <Icon type="x" />
          </a>
          <h2>{title}</h2>
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
