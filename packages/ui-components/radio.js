var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Fragment } from 'react';
import Styles from './styles/checkbox-radio.module.scss';
const { map } = React.Children;
const radioGroupMapper = (props) => map(props.children, (child) => child && (React.createElement(child.type, Object.assign({ key: child.props.value, name: props.name, onChange: props.onChange }, child.props))));
export const RadioGroup = (props) => React.createElement(Fragment, null, radioGroupMapper(props));
export const Radio = (_a) => {
    var { checked, children, defaultChecked, disabled, id, label, name, onChange, value } = _a, attributes = __rest(_a, ["checked", "children", "defaultChecked", "disabled", "id", "label", "name", "onChange", "value"]);
    id = id || `radio-${value.toLowerCase()}`;
    return (React.createElement("div", { className: Styles['input-radio-wrap'] },
        React.createElement("input", Object.assign({ checked: checked, defaultChecked: defaultChecked, disabled: disabled, id: id, name: name, onChange: onChange, type: "radio", value: value }, attributes)),
        React.createElement("label", { className: Styles['input-radio-label'], htmlFor: id }, label)));
};
export class StatefulRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        event.persist();
        this.setState({
            checked: !this.state.checked,
        }, () => {
            this.props.onChange(event);
        });
    }
    render() {
        return (React.createElement(Radio, Object.assign({}, this.props, { checked: this.state.checked, onChange: this.handleChange }), this.props.children));
    }
}
export default Radio;
//# sourceMappingURL=radio.js.map