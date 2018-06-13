var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var AccordionPanelSFC = function (_a) {
    var children = _a.children, className = _a.className, icon = _a.icon, open = _a.open, noPadding = _a.noPadding, onClick = _a.onClick, title = _a.title, attributes = __rest(_a, ["children", "className", "icon", "open", "noPadding", "onClick", "title"]);
    return (React.createElement("div", __assign({ className: cn('accordion-panel', className, {
            'has-child': noPadding,
            'is-visible': open,
        }) }, attributes),
        React.createElement("div", { className: "accordion-title", onClick: onClick }, title),
        React.createElement(AnimateHeight, { duration: 500, height: open ? 'auto' : 0 },
            React.createElement("div", { className: "accordion-content", style: { display: 'block' } }, children))));
};
var AccordionPanel = /** @class */ (function (_super) {
    __extends(AccordionPanel, _super);
    function AccordionPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.onAccordionPanelClick = function (e) {
            _this.setState({ open: !_this.state.open });
        };
        _this.state = {
            open: props.open,
        };
        return _this;
    }
    AccordionPanel.prototype.render = function () {
        return (React.createElement(AccordionPanelSFC, __assign({}, this.props, { open: this.state.open, onClick: this.onAccordionPanelClick }), this.props.children));
    };
    return AccordionPanel;
}(React.Component));
export { AccordionPanel };
export default AccordionPanel;
export { AccordionPanelDescription, AccordionPanelTitle, AccordionPanelIcon, AccordionPanelSFC, };
//# sourceMappingURL=accordion-panel.js.map