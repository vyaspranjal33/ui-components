import React from 'react';
import Styles from '../styles/color-palette.module.scss';
const DismissableBackground = ({ children, onClick }) => {
    let dismissableBackground;
    const handleClick = (event) => {
        if (event.target === dismissableBackground) {
            onClick(event);
        }
    };
    return (React.createElement("div", { ref: element => {
            dismissableBackground = element;
        }, className: Styles['dismissable-background'], onClick: handleClick }, children));
};
export default DismissableBackground;
//# sourceMappingURL=dismissableBackground.js.map