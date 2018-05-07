import React from 'react';
import Styles from './styles/hr.module.scss';
import cn from './utilities/classnames';
export const Divider = ({ label, thin }) => {
    return (React.createElement("hr", { className: cn({
            [Styles['has-label']]: !!label,
            [Styles['is-thin']]: thin,
        }), "data-label": label }));
};
Divider.defaultProps = {
    label: null,
    thin: false,
};
export default Divider;
//# sourceMappingURL=divider.js.map