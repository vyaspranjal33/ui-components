import React, { Fragment } from 'react';
const { map } = React.Children;
const radioGroupMapper = (props) => (map(props.children, (child) => (child && (React.createElement(child.type, Object.assign({ key: child.props.value, name: props.name, onChange: props.onChange }, child.props))))));
export const RadioGroup = (props) => (React.createElement(Fragment, null, radioGroupMapper(props)));
export const Radio = ({ checked, children, defaultChecked, disabled, id, label, name, onChange, value, }) => {
    id = id || `radio-${value.toLowerCase()}`;
    return (React.createElement("div", { className: "input-radio-wrap" },
        React.createElement("input", { checked: checked, defaultChecked: defaultChecked, disabled: disabled, id: id, name: name, onChange: onChange, type: "radio", value: value }),
        React.createElement("label", { className: "input-radio-label", htmlFor: id }, label)));
};
export class StatefulRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
        };
        this.handleChange = this
            .handleChange
            .bind(this);
    }
    handleChange(event) {
        event.persist();
        this.setState({
            checked: !this.state.checked,
        }, () => {
            this
                .props
                .onChange(event);
        });
    }
    render() {
        return (React.createElement(Radio, Object.assign({}, this.props, { checked: this.state.checked, onChange: this.handleChange }), this.props.children));
    }
}
export default Radio;
//# sourceMappingURL=radio.js.map