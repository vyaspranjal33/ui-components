import React from 'react';
import Badge from './badge';
import cn from './utilities/classnames';
export const Card = ({ badge, body, centered, children, inline, thin, title, }) => {
    const titleStyle = {
        width: '100%',
    };
    return (React.createElement("div", { className: cn('card', {
            'is-centered': centered,
            'is-thin': thin,
        }) },
        badge && React.createElement(Badge, Object.assign({}, badge)),
        title && React.createElement("h2", { style: titleStyle }, title),
        body && React.createElement("p", null, body),
        children));
};
export default Card;
//# sourceMappingURL=card.js.map