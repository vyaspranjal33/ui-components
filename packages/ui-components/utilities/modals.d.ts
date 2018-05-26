export interface ModalProps {
    bodyNode?: ElementWithClassList;
    isOpen?: boolean;
}
export interface ElementWithClassList extends Element {
    classList: DOMTokenList;
}
export declare const modalWillReceiveProps: (nextProps: ModalProps, currentProps: ModalProps) => void;
