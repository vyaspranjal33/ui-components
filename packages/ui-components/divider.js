import React from 'react';
import cn from './utilities/classnames';
export const Divider = ({ label, thin }) => {
    return (React.createElement("hr", { className: cn({
            'has-label': !!label,
            'is-thin': thin,
        }), "data-label": label }));
};
Divider.defaultProps = {
    label: null,
    thin: false,
};
export default Divider;
//# sourceMappingURL=divider.js.map