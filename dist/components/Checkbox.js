import * as React from 'react';
export const Checkbox = ({ checked, children: value, disabled, id, onChange, }) => {
    id = id || `checkbox-${value.toLowerCase()}`;
    return (React.createElement("div", { className: "input-checkbox-wrap" },
        React.createElement("input", { defaultChecked: checked, disabled: disabled, id: id, type: "checkbox", value: value, onChange: onChange }),
        React.createElement("label", { className: "input-checkbox-label", htmlFor: id }, value)));
};
export class StatefulCheckbox extends React.Component {
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
        return (React.createElement(Checkbox, Object.assign({}, this.props, { checked: this.state.checked, onChange: this.handleChange }), this.props.children));
    }
}
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map