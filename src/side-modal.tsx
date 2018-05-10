import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import cn from './utilities/classnames';
import {
  ModalProps,
  modalWillReceiveProps,
} from './utilities/modals';

export interface SideModalProps extends ModalProps {
  children?: React.ReactNode;
  modalContainer?: Element;
  onClose: (evt: any) => void;
}

export class SideModal extends React.Component<SideModalProps> {
  public static defaultProps: Partial<SideModalProps> = {
    bodyNode: document.body,
    modalContainer: document.body,
  };

  public componentWillReceiveProps(nextProps: SideModalProps) {
    modalWillReceiveProps(nextProps, this.props);
  }

  public render() {
    const {
      isOpen,
      onClose,
      children,
      modalContainer,
      bodyNode,
      ...primitiveProps,
    } = this.props;

    return ReactDOM.createPortal(
      <Fragment>
        <div className={cn('side-modal', { 'is-visible': isOpen })} {...primitiveProps}>
          {children}
        </div>
        <div
          className={cn('modal-mask', { 'is-visible': isOpen })}
          onClick={onClose}
        />
      </Fragment>
    , modalContainer);
  }
}

export default SideModal;
