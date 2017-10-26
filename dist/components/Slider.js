import * as React from 'react';
export const Slider = ({ value, id, label, onChange: handleChange, }) => {
    return (React.createElement("div", { className: "input-range-wrap" },
        React.createElement("input", { id: id, max: "100", min: "0", onChange: handleChange, type: "range", value: value }),
        label && React.createElement("div", { className: "input-range-percent" },
            value,
            "%")));
};
export class StatefulSlider extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: props.value,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;
        this.setState({ value }, () => {
            this.props.onChange(event, value);
        });
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
//# sourceMappingURL=Slider.js.map