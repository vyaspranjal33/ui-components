var modalOpenClass = 'modal-open';
export var modalWillReceiveProps = function (nextProps, currentProps) {
    if (nextProps.isOpen === currentProps.isOpen) {
        return;
    }
    var bodyNode = currentProps.bodyNode;
    if (nextProps.isOpen) {
        bodyNode.classList.add(modalOpenClass);
    }
    else {
        bodyNode.classList.remove(modalOpenClass);
    }
};
//# sourceMappingURL=modals.js.map