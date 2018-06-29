var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import Icon from './icon';
import Styles from './styles/details-row.module.scss';
import { Tooltip } from './tooltip';
import cn from './utilities/classnames';
export const DetailsRow = (_a) => {
    var { className, title, available, tooltipContent, children } = _a, attributes = __rest(_a, ["className", "title", "available", "tooltipContent", "children"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['details-row'], Styles.title, className, available ? null : Styles.steel) }, attributes),
        React.createElement(Icon, { className: cn(Styles['details-row'], Styles[available ? 'mantis' : 'steel']), type: available ? 'check' : 'x-legacy' }),
        React.createElement("p", { className: cn('small', Styles['details-row'], Styles.spacing) }, tooltipContent ? (React.createElement(Tooltip, { direction: "right", content: tooltipContent, className: "has-underline", length: "medium" },
            ' ',
            title)) : (title))));
};
DetailsRow.defaultProps = {
    available: false,
};
export default DetailsRow;
//# sourceMappingURL=details-row.js.map