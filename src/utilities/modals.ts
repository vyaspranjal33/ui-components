export interface ModalProps {
  bodyNode?: ElementWithClassList;
  isOpen?: boolean;
}

interface ElementWithClassList extends Element {
  classList: DOMTokenList;
}

const modalOpenClass = 'modal-open';

export const modalWillReceiveProps: (nextProps: ModalProps, currentProps: ModalProps) => void =
  (nextProps, currentProps) => {
    if (nextProps.isOpen === currentProps.isOpen) { return; }

    const { bodyNode } = currentProps;
    if (nextProps.isOpen) {
      bodyNode.classList.add(modalOpenClass);
    } else {
      bodyNode.classList.remove(modalOpenClass);
    }
  };
