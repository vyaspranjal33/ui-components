import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import cn from './utilities/classnames';
import {
  ModalProps,
  modalWillReceiveProps,
} from './utilities/modals';

export interface SideModalProps extends ModalProps {
  children?: React.ReactNode;
  onClose: (evt: any) => void;
}

export class SideModal extends React.Component<SideModalProps> {
  public static defaultProps: Partial<SideModalProps> = { bodyNode: document.body };

  public componentWillReceiveProps(nextProps: SideModalProps) {
    modalWillReceiveProps(nextProps, this.props);
  }

  public render() {
    return ReactDOM.createPortal(
      <Fragment>
        <div className={cn('side-modal', { 'is-visible': this.props.isOpen })}>
          {this.props.children}
        </div>
        <div
          className={cn('modal-mask', { 'is-visible': this.props.isOpen })}
          onClick={this.props.onClose}
        />
      </Fragment>
    , document.body);
  }
}

export default SideModal;
