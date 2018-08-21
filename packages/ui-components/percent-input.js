import React from 'react';
import { TextInput } from './text-input';
export class PercentInput extends React.Component {
    constructor() {
        super(...arguments);
        this.onValueChange = (event) => {
            // Have to use `undefined` in order to show the AUTO placeholder
            // Other falsey values show a 0.
            let value;
            if (event.currentTarget.value.length) {
                value = Number(event.currentTarget.value);
            }
            else {
                value = undefined;
            }
            if (value < 0 || event.currentTarget.value === '-0') {
                value = undefined;
            }
            if (value > 100) {
                value = 100;
            }
            this.props.onChange(event, value);
        };
    }
    render() {
        return (React.createElement(TextInput, Object.assign({}, this.props, { onChange: this.onValueChange, max: 100, placeholder: 'AUTO', type: "number", units: "%" })));
    }
}
export default PercentInput;
//# sourceMappingURL=percent-input.js.map