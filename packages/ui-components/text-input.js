(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.TextInput = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function classNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = '';
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (!arg) {
            continue;
        }
        if (typeof arg === 'string' || typeof arg === 'number') {
            result = result + " " + arg;
            continue;
        }
        if (Array.isArray(arg)) {
            result = result + " " + classNames.apply(void 0, arg);
            continue;
        }
        if (typeof arg === 'object') {
            var keys = Object.keys(arg);
            for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
                var key = keys_1[_b];
                if (arg[key]) {
                    result = result + " " + key;
                }
            }
        }
    }
    return result.trim();
}

var convertInputValue = function (value, inputType) {
    return inputType === 'number' ? parseInt(value, 10) : value;
};
var onInputFocus = function () {
    this.setState({ isInputFocused: true });
};
var getRenderedTextInput = function (value) {
    var classes = classNames('input-text-wrap', {
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
        this.props.info && (React.createElement("span", { className: classNames('input-info', {
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

exports.TextInput = TextInput;
exports.StatefulTextInput = StatefulTextInput;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=text-input.js.map
