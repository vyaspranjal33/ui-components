import * as React from 'react';
import Icon from './Icon';
export const Footer = ({ children, icon, header, }) => (React.createElement("footer", { className: "small is-center" },
    icon &&
        React.createElement("span", null,
            React.createElement(Icon, { type: icon }),
            ' '),
    header &&
        React.createElement("strong", null, `${header} `),
    children));
export default Footer;
//# sourceMappingURL=SmallFooter.js.map