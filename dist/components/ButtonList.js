import * as React from 'react';
const { map } = React.Children;
export const ButtonList = ({ children, onDark }) => {
    return (React.createElement("div", { className: "btn-list" }, map(children, (button) => {
        return React.cloneElement(button, { onDark });
    })));
};
ButtonList.defaultProps = {
    onDark: false,
};
export default ButtonList;
//# sourceMappingURL=ButtonList.js.map