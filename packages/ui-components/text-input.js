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
import React from 'react';
import cn from './utilities/classnames';
var convertInputValue = function (value, inputType) {
    return inputType === 'number' ? parseInt(value, 10) : value;
};
var onInputFocus = function () {
    this.setState({ isInputFocused: true });
};
var getRenderedTextInput = function (value) {
    var classes = cn('input-text-wrap', {
        'has-value': !!value || value === 0,
        'is-disabled': this.props.isDisabled,
        'is-error': !this.props.isValid,
        'is-focused': this.state.isInputFocused,
        'is-large': this.props.isLarge,
        'is-required': this.props.isRequired,
        'is-search': this.props.isSearch,
    });
    var infoId = this.props.info && this.props.id + "-info";
    var children = this.props.children || '';
    return (React.createElement("div", { className: classes, style: this.inputStyle },
        React.createElement("label", { className: "input-text-label", htmlFor: this.props.id }, this.props.label),
        React.createElement("input", { id: this.props.id, value: this.props.value, type: this.props.type, onChange: this.onValueChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, "aria-describedby": infoId }),
        this.props.info && (React.createElement("span", { className: cn('input-info', {
                danger: !this.props.isValid,
            }), id: infoId }, this.props.info)),
        children));
};
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isInputFocused: false,
        };
        _this.onInputFocus = onInputFocus.bind(_this);
        _this.onInputBlur = _this.onInputBlur.bind(_this);
        _this.onValueChange = _this.onValueChange.bind(_this);
        return _this;
    }
    Object.defineProperty(TextInput.prototype, "inputStyle", {
        get: function () {
            var _a = this.props, fullWidth = _a.fullWidth, style = _a.style;
            if (fullWidth) {
                return __assign({}, style, { width: '100%' });
            }
            return style;
        },
        enumerable: true,
        configurable: true
    });
    TextInput.prototype.onValueChange = function (event) {
        var value = convertInputValue(event.target.value, this.props.type);
        this.props.onChange(event, value);
    };
    TextInput.prototype.onInputBlur = function (event) {
        this.setState({ isInputFocused: false });
        if (event !== undefined && this.props.onBlur) {
            var value = convertInputValue(event.target.value, this.props.type);
            this.props.onBlur(event, value);
        }
    };
    TextInput.prototype.render = function () {
        return getRenderedTextInput.call(this, this.props.value);
    };
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
    return TextInput;
}(React.Component));
export { TextInput };
var StatefulTextInput = /** @class */ (function (_super) {
    __extends(StatefulTextInput, _super);
    function StatefulTextInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isInputFocused: false,
            value: '',
        };
        _this.onInputFocus = onInputFocus.bind(_this);
        _this.onInputBlur = _this.onInputBlur.bind(_this);
        _this.onValueChange = _this.onValueChange.bind(_this);
        return _this;
    }
    StatefulTextInput.prototype.onValueChange = function (event) {
        var value = convertInputValue(event.target.value, this.props.type);
        this.setState({ value: value });
        this.props.onChange(event, value);
    };
    StatefulTextInput.prototype.onInputBlur = function (event) {
        this.setState({ isInputFocused: false });
        if (event && this.props.onBlur) {
            var value = convertInputValue(event.target.value, this.props.type);
            this.setState({ value: value });
            this.props.onBlur(event, value);
        }
    };
    StatefulTextInput.prototype.render = function () {
        return getRenderedTextInput.call(this, this.state.value);
    };
    StatefulTextInput.defaultProps = {
        isValid: true,
    };
    return StatefulTextInput;
}(React.Component));
export { StatefulTextInput };
//# sourceMappingURL=text-input.js.map