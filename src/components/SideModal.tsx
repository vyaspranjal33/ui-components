import React, { Fragment } from 'react';
import cn from '../utilities/classnames';

export interface SideModalProps {
  bodyNode?: ElementWithClassList;
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: (evt: any) => void;
}

export interface ElementWithClassList extends Element {
  classList: DOMTokenList;
}

const modalOpenClass = 'modal-open';

export class SideModal extends React.Component<SideModalProps> {
  public static defaultProps: Partial<SideModalProps> = { bodyNode: document.body };

  public componentWillReceiveProps(nextProps: SideModalProps) {
    if (nextProps.isOpen === this.props.isOpen) { return; }

    const { bodyNode } = this.props;
    if (nextProps.isOpen) {
      bodyNode.classList.add(modalOpenClass);
    } else {
      bodyNode.classList.remove(modalOpenClass);
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
