import React from 'react';
import cn from '../utilities/classnames';
import {
  getDefaultModalProps,
  ModalProps,
  modalWillReceiveProps,
} from '../utilities/modals';

interface ConfirmationModalProps extends ModalProps {
  children: React.ReactNode;
}

export class ConfirmationModal extends React.Component<ConfirmationModalProps> {
  public static defaultProps: Partial<ConfirmationModalProps> = getDefaultModalProps();

  public componentWillReceiveProps(nextProps: ConfirmationModalProps) {
    modalWillReceiveProps(nextProps, this.props);
  }

  public render() {
    return (
      <div className={cn('sg-modal', { 'is-visible': this.props.isOpen })}>
        <div className="conf-alert sg-modal-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

interface ActionsProps {
  children: React.ReactNode;
}

export const ConfirmationModalActions: React.SFC<ActionsProps> = ({ children }) => (
  <div className="conf-alert-actions">{children}</div>
);

interface BodyProps {
  children: React.ReactNode;
}

export const ConfirmationModalBody: React.SFC<BodyProps> = ({ children }) => (
  <div className="conf-alert-body">
    <p className="conf-alert-text">{children}</p>
  </div>
);

interface HeaderProps {
  children: React.ReactNode;
}

export const ConfirmationModalHeader: React.SFC<HeaderProps> = ({ children }) => (
  <h2 className="conf-alert-header">{children}</h2>
);

export default ConfirmationModal;
