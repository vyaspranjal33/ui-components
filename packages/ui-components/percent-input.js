import { StatefulTextInput, } from './text-input';
export class PercentInput extends StatefulTextInput {
    constructor() {
        super(...arguments);
        this.onValueChange = (event) => {
            let value = event.currentTarget.value.length
                ? Number(event.currentTarget.value)
                : undefined;
            value =
                value < 0 || event.currentTarget.value === '-0'
                    ? undefined
                    : value > 100
                        ? 100
                        : value;
            this.setState({ value });
            this.props.onChange(event, value);
        };
    }
}
PercentInput.defaultProps = {
    max: 100,
    placeholder: 'AUTO',
    type: 'number',
    units: '%',
};
export default PercentInput;
//# sourceMappingURL=percent-input.js.map