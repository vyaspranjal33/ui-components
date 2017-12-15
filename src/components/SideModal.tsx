import React, { Fragment } from 'react';
import cn from '../utilities/classnames';

export interface SideModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: (evt: any) => void;
}

export class SideModal extends React.Component<SideModalProps> {
  public componentWillReceiveProps(nextProps: SideModalProps) {
    if (nextProps.isOpen === this.props.isOpen) { return; }

    if (nextProps.isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
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
