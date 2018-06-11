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
const AccordionPanelTitle = (_a) => {
    var { text, style, className } = _a, attributes = __rest(_a, ["text", "style", "className"]);
    return (React.createElement("h2", Object.assign({ className: className, style: style }, attributes), text));
};
export default AccordionPanelTitle;
//# sourceMappingURL=accordion-panel-title.js.map