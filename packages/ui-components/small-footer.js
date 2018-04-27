import React from 'react';
import Icon from './icon';
export const Footer = ({ children, icon, header, }) => (React.createElement("p", { className: "small is-center" },
    icon &&
        React.createElement("span", null,
            React.createElement(Icon, { type: icon }),
            ' '),
    header &&
        React.createElement("strong", null, `${header} `),
    children));
export default Footer;
//# sourceMappingURL=small-footer.js.map