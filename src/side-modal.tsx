import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Styles from './styles/modal.module.scss';
import cn from './utilities/classnames';
import { ModalProps, modalWillReceiveProps } from './utilities/modals';

export interface SideModalProps extends ModalProps {
  children?: React.ReactNode;
  modalContainer?: Element;
  onClose: (evt: any) => void;
  className?: string;
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
      className,
      ...attributes
    } = this.props;

    return ReactDOM.createPortal(
      <Fragment>
        <div
          className={cn('side-modal', Styles['side-modal'], className, {
            [Styles['is-visible']]: this.props.isOpen,
            'is-visible': this.props.isOpen,
          })}
          {...attributes}
        >
          {children}
        </div>
        <div
          className={cn('modal-mask', Styles['modal-mask'], {
            [Styles['is-visible']]: this.props.isOpen,
            'is-visible': this.props.isOpen,
          })}
          onClick={onClose}
        />
      </Fragment>,
      modalContainer
    );
  }
}

export default SideModal;
