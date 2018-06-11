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
import Styles from './styles/button.module.scss';
import cn from './utilities/classnames';
import findActiveIndex from './utilities/find-active-index';
const { map } = React.Children;
export const ToggleButtons = (_a) => {
    var { children, onChange, className } = _a, attributes = __rest(_a, ["children", "onChange", "className"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['btn-group'], className) }, attributes), map(children, (button, index) => {
        return React.cloneElement(button, {
            onClick(event) {
                const { children: label, onClick } = button.props;
                onClick(event);
                onChange(event, label, index);
            },
            type: 'group-item',
        });
    })));
};
export class StatefulToggleButtons extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeIndex: findActiveIndex(this.props.children),
        };
    }
    render() {
        const { activeIndex } = this.state;
        const buttons = map(this.props.children, (button, index) => {
            return React.cloneElement(button, {
                active: index === activeIndex,
            });
        });
        return (React.createElement(ToggleButtons, Object.assign({}, this.props, { onChange: this.handleChange }), buttons));
    }
    handleChange(event, label, index) {
        const { onChange: handleChange } = this.props;
        this.setState({
            activeIndex: index,
        }, () => {
            handleChange(event, label, index);
        });
    }
}
export default ToggleButtons;
//# sourceMappingURL=toggle-buttons.js.map