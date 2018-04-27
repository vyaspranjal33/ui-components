const modalOpenClass = 'modal-open';
export const modalWillReceiveProps = (nextProps, currentProps) => {
    if (nextProps.isOpen === currentProps.isOpen) {
        return;
    }
    const { bodyNode } = currentProps;
    if (nextProps.isOpen) {
        bodyNode.classList.add(modalOpenClass);
    }
    else {
        bodyNode.classList.remove(modalOpenClass);
    }
};
//# sourceMappingURL=modals.js.map