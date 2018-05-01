import React from 'react';
import cn from './utilities/classnames';
const convertInputValue = (value, inputType) => {
    return inputType === 'number' ? parseInt(value, 10) : value;
};
const onInputFocus = function () {
    this.setState({ isInputFocused: true });
};
const getRenderedTextInput = function (value) {
    const classes = cn('input-text-wrap', {
        'has-value': !!value || value === 0,
        'is-disabled': this.props.isDisabled,
        'is-error': !this.props.isValid,
        'is-focused': this.state.isInputFocused,
        'is-large': this.props.isLarge,
        'is-required': this.props.isRequired,
        'is-search': this.props.isSearch,
    });
    const infoId = this.props.info && `${this.props.id}-info`;
    const children = this.props.children || '';
    return (React.createElement("div", { className: classes, style: this.inputStyle },
        React.createElement("label", { className: "input-text-label", htmlFor: this.props.id }, this.props.label),
        React.createElement("input", { id: this.props.id, value: this.props.value, name: this.props.name, type: this.props.type, onChange: this.onValueChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, "aria-describedby": infoId }),
        this.props.info && (React.createElement("span", { className: cn('input-info', {
                danger: !this.props.isValid,
            }), id: infoId }, this.props.info)),
        children));
};
export class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInputFocused: false,
        };
        this.onInputFocus = onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    get inputStyle() {
        const { fullWidth, style } = this.props;
        if (fullWidth) {
            return Object.assign({}, style, { width: '100%' });
        }
        return style;
    }
    onValueChange(event) {
        const value = convertInputValue(event.target.value, this.props.type);
        this.props.onChange(event, value);
    }
    onInputBlur(event) {
        this.setState({ isInputFocused: false });
        if (event !== undefined && this.props.onBlur) {
            const value = convertInputValue(event.target.value, this.props.type);
            this.props.onBlur(event, value);
        }
    }
    render() {
        return getRenderedTextInput.call(this, this.props.value);
    }
}
TextInput.defaultProps = {
    fullWidth: false,
    info: '',
    isDisabled: false,
    isLarge: false,
    isRequired: false,
    isSearch: false,
    isValid: true,
    label: '',
    style: {},
    value: '',
};
export class StatefulTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInputFocused: false,
            value: '',
        };
        this.onInputFocus = onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(event) {
        const value = convertInputValue(event.target.value, this.props.type);
        this.setState({ value });
        this.props.onChange(event, value);
    }
    onInputBlur(event) {
        this.setState({ isInputFocused: false });
        if (event && this.props.onBlur) {
            const value = convertInputValue(event.target.value, this.props.type);
            this.setState({ value });
            this.props.onBlur(event, value);
        }
    }
    render() {
        return getRenderedTextInput.call(this, this.state.value);
    }
}
StatefulTextInput.defaultProps = {
    isValid: true,
};
//# sourceMappingURL=text-input.js.map