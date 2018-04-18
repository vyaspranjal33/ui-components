import React from 'react';
import cn from './utilities/classnames';
export var Divider = function (_a) {
    var label = _a.label, thin = _a.thin;
    return (React.createElement("hr", { className: cn({
            'is-thin': thin,
        }), "data-label": label }));
};
Divider.defaultProps = {
    label: null,
    thin: false,
};
export default Divider;
//# sourceMappingURL=divider.js.map