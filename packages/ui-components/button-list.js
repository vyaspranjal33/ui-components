import React from 'react';
var map = React.Children.map;
export var ButtonList = function (_a) {
    var children = _a.children, onDark = _a.onDark;
    return (React.createElement("div", { className: "btn-list" }, map(children, function (button) {
        return button && React.cloneElement(button, { onDark: onDark });
    })));
};
ButtonList.defaultProps = {
    onDark: false,
};
export default ButtonList;
//# sourceMappingURL=button-list.js.map