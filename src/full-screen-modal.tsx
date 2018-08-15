import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from './icon';

import cn from './utilities/classnames';
import { ModalProps, modalWillReceiveProps } from './utilities/modals';

import Styles from './styles/fullscreen-modal.module.scss';

export interface FullScreenModelProps extends ModalProps {
  children?: React.ReactChildren;
  className?: string;
  isOpen?: boolean;
  onClose?: (event: any) => void;
  modalContainer?: Element;
  title: string;
}

export class FullscreenModal extends Component<FullScreenModelProps> {
  public static defaultProps: Partial<FullScreenModelProps> = {
    bodyNode: document.body,
    modalContainer: document.body,
    onClose: () => {},
  };

  public componentWillReceiveProps(nextProps: FullScreenModelProps) {
    modalWillReceiveProps(nextProps, this.props);
  }

  public render() {
    const {
      modalContainer,
      isOpen,
      bodyNode,
      onClose,
      className,
      children,
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
        <div className="modal-content has-padding">
          <div className="row">{children}</div>
        </div>
      </div>,
      modalContainer
    );
  }
}

export default FullscreenModal;
