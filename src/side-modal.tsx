import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Styles from './styles/modal.module.scss';
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
    return ReactDOM.createPortal(
      <Fragment>
        <div className={cn(Styles['side-modal'], { [Styles['is-visible']]: this.props.isOpen })}>
          {this.props.children}
        </div>
        <div
          className={cn(Styles['modal-mask'], { [Styles['is-visible']]: this.props.isOpen })}
          onClick={this.props.onClose}
        />
      </Fragment>
    , this.props.modalContainer);
  }
}

export default SideModal;
