import * as cn from 'classnames';
import * as React from 'react';
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
//# sourceMappingURL=Dropzone.js.map