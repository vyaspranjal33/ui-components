import * as cn from 'classnames';
import * as React from 'react';
import Badge from './Badge';
export const Card = ({ badge, body, centered, children, inline, thin, title, }) => {
    return (React.createElement("div", { className: cn('card', {
            'is-centered': centered,
            'is-thin': thin,
        }) },
        badge && React.createElement(Badge, Object.assign({}, badge)),
        title && React.createElement("h2", null, title),
        body && React.createElement("p", null, body),
        children));
};
export default Card;
//# sourceMappingURL=Card.js.map