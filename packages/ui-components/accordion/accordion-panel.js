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
import AnimateHeight from 'react-animate-height';
import cn from '../utilities/classnames';
import AccordionPanelDescription from './accordion-panel-description';
import AccordionPanelIcon from './accordion-panel-icon';
import AccordionPanelTitle from './accordion-panel-title';
const AccordionPanelSFC = (_a) => {
    var { children, className, icon, open, noPadding, onClick, title } = _a, attributes = __rest(_a, ["children", "className", "icon", "open", "noPadding", "onClick", "title"]);
    return (React.createElement("div", Object.assign({ className: cn('accordion-panel', className, {
            'has-child': noPadding,
            'is-visible': open,
        }) }, attributes),
        React.createElement("div", { className: "accordion-title", onClick: onClick }, title),
        React.createElement(AnimateHeight, { duration: 500, height: open ? 'auto' : 0 },
            React.createElement("div", { className: "accordion-content", style: { display: 'block' } }, children))));
};
export class AccordionPanel extends React.Component {
    constructor(props) {
        super(props);
        this.onAccordionPanelClick = (e) => {
            this.setState({ open: !this.state.open });
        };
        this.state = {
            open: props.open,
        };
    }
    render() {
        return (React.createElement(AccordionPanelSFC, Object.assign({}, this.props, { open: this.state.open, onClick: this.onAccordionPanelClick }), this.props.children));
    }
}
export default AccordionPanel;
export { AccordionPanelDescription, AccordionPanelTitle, AccordionPanelIcon, AccordionPanelSFC, };
//# sourceMappingURL=accordion-panel.js.map