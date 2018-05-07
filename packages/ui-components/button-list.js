import React from 'react';
import Styles from './styles/button.module.scss';
const { map } = React.Children;
export const ButtonList = ({ children, onDark }) => {
    return (React.createElement("div", { className: Styles['btn-list'] }, map(children, (button) => {
        return button && React.cloneElement(button, { onDark });
    })));
};
ButtonList.defaultProps = {
    onDark: false,
};
export default ButtonList;
//# sourceMappingURL=button-list.js.map