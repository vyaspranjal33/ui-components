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
import Styles from './styles/slider.module.scss';
export const Slider = (_a) => {
    var { value, id, label, onChange: handleChange } = _a, attributes = __rest(_a, ["value", "id", "label", "onChange"]);
    return (React.createElement("div", { className: Styles['input-range-wrap'] },
        React.createElement("input", Object.assign({ id: id, max: "100", min: "0", onChange: handleChange, type: "range", value: value }, attributes)),
        label && React.createElement("div", { className: Styles['input-range-percent'] },
            value,
            "%")));
};
export class StatefulSlider extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: this.props.value,
        };
        this.handleChange = (event) => {
            const value = event.target.value;
            this.setState({ value }, () => {
                this.props.onChange(event, value);
            });
        };
    }
    render() {
        const { onChange } = this.props;
        const { value } = this.state;
        return (React.createElement(Slider, Object.assign({}, this.props, { value: value, onChange: this.handleChange })));
    }
}
Slider.defaultProps = {
    label: true,
    value: 0,
};
export default Slider;
//# sourceMappingURL=slider.js.map