import React, { Fragment } from 'react';
import cn from '../utilities/classnames';
import {
  getDefaultModalProps,
  ModalProps,
  modalWillReceiveProps,
} from '../utilities/modals';

interface SideModalProps extends ModalProps {
  children?: React.ReactNode;
  onClose: (evt: any) => void;
}

export class SideModal extends React.Component<SideModalProps> {
  public static defaultProps: Partial<SideModalProps> = getDefaultModalProps();

  public componentWillReceiveProps(nextProps: SideModalProps) {
    modalWillReceiveProps(nextProps, this.props);
  }

  public render() {
    return (
      <Fragment>
        <div className={cn('side-modal', { 'is-visible': this.props.isOpen })}>
          {this.props.children}
        </div>
        <div
          className={cn('modal-mask', { 'is-visible': this.props.isOpen })}
          onClick={this.props.onClose}
        />
      </Fragment>
    );
  }
}

export default SideModal;
