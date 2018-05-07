import React from 'react';
import Styles from './styles/dropzone.module.scss';
import cn from './utilities/classnames';
export const Dropzone = ({ active, children: alert, hovered, large, }) => {
    return (React.createElement("section", { className: cn(Styles.dropzone, {
            [Styles['has-inline-alert']]: !!alert,
            [Styles['is-active']]: active,
            [Styles['is-hovered']]: hovered,
            [Styles['is-large']]: large,
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