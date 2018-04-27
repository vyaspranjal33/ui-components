import React from 'react';
import cn from './utilities/classnames';
export const Dropzone = ({ active, children: alert, hovered, large, }) => {
    return (React.createElement("section", { className: cn('dropzone', {
            'has-inline-alert': !!alert,
            'is-active': active,
            'is-hovered': hovered,
            'is-large': large,
        }), role: "hidden" }, alert &&
        React.cloneElement(alert, Object.assign({}, alert.props, { inline: true }))));
};
Dropzone.defaultProps = {
    active: false,
    hovered: false,
    large: false,
};
export default Dropzone;
//# sourceMappingURL=dropzone.js.map