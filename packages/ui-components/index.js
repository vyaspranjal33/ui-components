(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global['UI Components'] = {}),global.React));
}(this, (function (exports,React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

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

var lightStyle = { color: 'white' };
var Icon = function (_a) {
    var type = _a.type, className = _a.className, handleClick = _a.onClick, onDark = _a.onDark;
    return (React__default.createElement("i", { className: classNames('sg-icon', "sg-icon-" + type, (_b = {}, _b[className] = !!className, _b)), onClick: handleClick, style: onDark ? lightStyle : null }));
    var _b;
};
Icon.defaultProps = {
    className: '',
    onDark: false,
};

var Actions = function (_a) {
    var children = _a.children;
    return (React__default.createElement("div", { className: "actions" },
        React__default.createElement(Icon, { type: "ellipsis" }),
        React__default.createElement("div", { className: "action-icons" }, children)));
};
var ActionsCell = function (_a) {
    var children = _a.children;
    return (React__default.createElement("td", { className: "actions" },
        React__default.createElement(Icon, { type: "ellipsis" }),
        React__default.createElement("div", { className: "action-icons" }, children)));
};
var Action = function (_a) {
    var title = _a.title, icon = _a.icon, handleClick = _a.onClick;
    return (React__default.createElement("span", { "data-tooltip": title, "data-tooltip-pos": "up", onClick: handleClick },
        React__default.createElement(Icon, { type: icon })));
};

var iconFor = function (type) {
    if (type === 'success') {
        return 'check-circle';
    }
    return 'warning';
};
var Alert = function (_a) {
    var children = _a.children, icon = _a.icon, inline = _a.inline, handleClick = _a.onClick, type = _a.type;
    return (React__default.createElement("div", { className: classNames('alert', "alert-" + type, {
            'alert-inline': inline,
        }), role: "alert" },
        React__default.createElement("p", null,
            React__default.createElement(Icon, { type: icon || iconFor(type) }),
            children,
            React__default.createElement(Icon, { type: "x", onClick: handleClick }))));
};
Alert.defaultProps = {
    hidden: false,
    inline: false,
};

var Badge = function (_a) {
    var children = _a.children, color = _a.color, content = _a.content;
    return (React__default.createElement("span", { className: classNames('badge', color) }, children || content));
};
Badge.defaultProps = {
    children: 0,
    color: '',
};

var map = React__default.Children.map;
var mapper = function (children) { return (map(children, function (child, i) { return (child && React__default.createElement("li", { key: child.props.to || child.props.href },
    React__default.createElement(child.type, __assign({}, child.props)))); })); };
var Breadcrumb = function (_a) {
    var children = _a.children, withoutTrailingSlash = _a.withoutTrailingSlash;
    return (React__default.createElement("ol", { className: "breadcrumb" },
        mapper(children),
        !withoutTrailingSlash && React__default.createElement("li", null)));
};
Breadcrumb.defaultProps = {
    withoutTrailingSlash: false,
};

var Loader = function (_a) {
    var onDark = _a.onDark, large = _a.large, small = _a.small, centered = _a.centered;
    var size = 10;
    if (large) {
        size *= 2;
    }
    if (small) {
        size /= 2;
    }
    return (React__default.createElement("svg", { className: classNames('sg-loader', {
            'is-centered': centered,
            'is-large': large,
            'is-small': small,
            'loader-on-dark': onDark,
        }) },
        React__default.createElement("rect", { className: "logo-square bottom-left", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square bottom-middle", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square middle", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square top-middle", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square top-right", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square middle-left", width: size, height: size }),
        React__default.createElement("rect", { className: "logo-square middle-right", width: size, height: size })));
};
Loader.defaultProps = {
    centered: false,
    large: false,
    onDark: false,
    small: false,
};

var Button = function (props) {
    return (React__default.createElement(Buttonized, __assign({}, props),
        React__default.createElement("button", null, props.children)));
};
var Buttonized = function (_a) {
    var children = _a.children, type = _a.type, badge = _a.badge, disabled = _a.disabled, loading = _a.loading, small = _a.small, onDark = _a.onDark, onClick = _a.onClick, group = _a.group, active = _a.active, icon = _a.icon, id = _a.id;
    var hasBadge = !!badge || badge === 0;
    var hasIcon = !!icon;
    var content = [];
    if (hasBadge) {
        content.push(React__default.createElement(Badge, { key: 1 }, badge));
    }
    if (hasIcon) {
        content.push(React__default.createElement(Icon, { key: 2, type: icon }));
    }
    if (loading) {
        content.push(React__default.createElement(Loader, { key: 3, small: true, onDark: type === 'primary' }));
    }
    // the children of the element being buttonized
    if (children.props.children) {
        content.push(children.props.children);
    }
    return (React__default.cloneElement(children, {
        className: classNames('btn', "btn-" + type, {
            'btn-on-dark': onDark,
            'btn-small': small,
            'has-badge': hasBadge,
            'has-icon': hasIcon || loading,
            'is-active': active,
            'is-disabled': disabled,
            'is-loading': loading,
        }),
        id: id,
        onClick: onClick,
    }, content));
};
Button.defaultProps = {
    active: false,
    badge: null,
    children: '',
    disabled: false,
    group: false,
    icon: null,
    loading: false,
    onClick: function () { },
    onDark: false,
    small: false,
    type: 'primary',
};

var map$1 = React__default.Children.map;
var ButtonList = function (_a) {
    var children = _a.children, onDark = _a.onDark;
    return (React__default.createElement("div", { className: "btn-list" }, map$1(children, function (button) {
        return button && React__default.cloneElement(button, { onDark: onDark });
    })));
};
ButtonList.defaultProps = {
    onDark: false,
};

var Card = function (_a) {
    var badge = _a.badge, body = _a.body, centered = _a.centered, children = _a.children, inline = _a.inline, thin = _a.thin, title = _a.title;
    var titleStyle = {
        width: '100%',
    };
    return (React__default.createElement("div", { className: classNames('card', {
            'is-centered': centered,
            'is-thin': thin,
        }) },
        badge && React__default.createElement(Badge, __assign({}, badge)),
        title && React__default.createElement("h2", { style: titleStyle }, title),
        body && React__default.createElement("p", null, body),
        children));
};

var modalOpenClass = 'modal-open';
var modalWillReceiveProps = function (nextProps, currentProps) {
    if (nextProps.isOpen === currentProps.isOpen) {
        return;
    }
    var bodyNode = currentProps.bodyNode;
    if (nextProps.isOpen) {
        bodyNode.classList.add(modalOpenClass);
    }
    else {
        bodyNode.classList.remove(modalOpenClass);
    }
};

var evaluateRenderProp = function (prop) {
    return prop instanceof Function ? prop() : prop;
};
var CenterModal = /** @class */ (function (_super) {
    __extends(CenterModal, _super);
    function CenterModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CenterModal.prototype.componentWillReceiveProps = function (nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    };
    CenterModal.prototype.render = function () {
        // Using <> instead of <Fragment> is breaking the linter.
        return (React__default.createElement(React.Fragment, null,
            React__default.createElement("div", { className: classNames('center-modal', { 'is-visible': this.props.open, 'is-large': this.props.large }) },
                this.props.hasX &&
                    (React__default.createElement("i", { className: "sg-icon sg-icon-x", "data-role": "close-center-modal", onClick: this.props.onClose })),
                this.props.renderHeader && React__default.createElement("h1", null, evaluateRenderProp(this.props.renderHeader)),
                evaluateRenderProp(this.props.renderBody),
                this.props.renderFooter &&
                    (React__default.createElement("div", { className: "modal-footer" }, evaluateRenderProp(this.props.renderFooter)))),
            React__default.createElement("div", { className: classNames('modal-mask', { 'is-visible': this.props.open }), onClick: this.props.onClose })));
    };
    CenterModal.defaultProps = {
        bodyNode: document.body,
        hasX: false,
        large: false,
    };
    return CenterModal;
}(React.Component));

var Column = function (_a) {
    var children = _a.children, width = _a.width, offset = _a.offset;
    return (React__default.createElement("div", { className: classNames((width > 0 ? 'col-' + width.toString() : ''), (offset > 0 ? 'col-offset-' + offset.toString() : '')) }, children));
};

var Checkbox = function (_a) {
    var checked = _a.checked, value = _a.children, disabled = _a.disabled, id = _a.id, onChange = _a.onChange;
    id = id || "checkbox-" + value.toLowerCase();
    return (React__default.createElement("div", { className: "input-checkbox-wrap" },
        React__default.createElement("input", { defaultChecked: checked, disabled: disabled, id: id, type: "checkbox", value: value, onChange: onChange }),
        React__default.createElement("label", { className: "input-checkbox-label", htmlFor: id }, value)));
};
var StatefulCheckbox = /** @class */ (function (_super) {
    __extends(StatefulCheckbox, _super);
    function StatefulCheckbox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: props.checked,
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    StatefulCheckbox.prototype.handleChange = function (event) {
        var _this = this;
        event.persist();
        this.setState({
            checked: !this.state.checked,
        }, function () {
            _this.props.onChange(event);
        });
    };
    StatefulCheckbox.prototype.render = function () {
        return (React__default.createElement(Checkbox, __assign({}, this.props, { checked: this.state.checked, onChange: this.handleChange }), this.props.children));
    };
    return StatefulCheckbox;
}(React__default.Component));

var Row = function (_a) {
    var children = _a.children;
    return (React__default.createElement("div", { className: "row" }, children));
};

var evaluateRenderProp$1 = function (prop) {
    return typeof prop === 'string' ? prop : prop();
};
var ConfirmationModal = /** @class */ (function (_super) {
    __extends(ConfirmationModal, _super);
    function ConfirmationModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmationModal.prototype.componentWillReceiveProps = function (nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    };
    ConfirmationModal.prototype.render = function () {
        return (React__default.createElement("div", { className: classNames('sg-modal', { 'is-visible': this.props.isOpen }) },
            React__default.createElement("div", { className: "conf-alert sg-modal-content" },
                React__default.createElement("h2", { className: "conf-alert-header" }, evaluateRenderProp$1(this.props.renderHeader)),
                React__default.createElement("div", { className: "conf-alert-body" },
                    React__default.createElement("p", { className: "conf-alert-text" }, evaluateRenderProp$1(this.props.renderBody))),
                React__default.createElement("div", { className: "conf-alert-actions" }, evaluateRenderProp$1(this.props.renderActions)))));
    };
    ConfirmationModal.defaultProps = { bodyNode: document.body };
    return ConfirmationModal;
}(React.Component));

var Divider = function (_a) {
    var label = _a.label, thin = _a.thin;
    return (React__default.createElement("hr", { className: classNames({
            'is-thin': thin,
        }), "data-label": label }));
};
Divider.defaultProps = {
    label: null,
    thin: false,
};

var map$2 = React__default.Children.map;
var DropdownButton = /** @class */ (function (_super) {
    __extends(DropdownButton, _super);
    function DropdownButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: false,
        };
        _this.handleClick = function () {
            var active = _this.state.active;
            _this.setState({ active: !active });
        };
        return _this;
    }
    DropdownButton.prototype.render = function () {
        var _a = this.props, badge = _a.badge, children = _a.children, disabled = _a.disabled, gear = _a.gear, group = _a.group, icon = _a.icon, label = _a.label, loading = _a.loading, onClick = _a.onClick, onDark = _a.onDark, small = _a.small, type = _a.type;
        var active = this.state.active;
        var hasBadge = !!badge || badge === 0;
        var hasIcon = !!icon;
        var buttonType = type;
        if (gear) {
            buttonType = 'secondary';
        }
        var links = map$2(children, function (link) {
            return React__default.cloneElement(link, {
                className: link.props.className + " dropdown-link",
            });
        });
        return (React__default.createElement("div", { className: "btn-list" },
            React__default.createElement("div", { className: classNames('btn', 'btn-dropdown', 'dropdown', "btn-" + buttonType, {
                    'btn-dropdown-gear': gear,
                    'btn-on-dark': onDark,
                    'btn-small': small,
                    'has-badge': hasBadge,
                    'has-icon': hasIcon || loading,
                    'is-active': active,
                    'is-disabled': disabled,
                    'is-loading': loading,
                }), onClick: this.handleClick },
                !gear && hasBadge && React__default.createElement(Badge, null, badge),
                !gear && hasIcon && React__default.createElement(Icon, { type: icon, onDark: type === 'primary' }),
                gear ? React__default.createElement(Icon, { type: "gear" }) : label,
                React__default.createElement("ul", { className: "dropdown-menu" }, links))));
    };
    DropdownButton.defaultProps = Button.defaultProps;
    return DropdownButton;
}(React__default.Component));

var Dropzone = function (_a) {
    var active = _a.active, alert = _a.children, hovered = _a.hovered, large = _a.large;
    return (React__default.createElement("section", { className: classNames('dropzone', {
            'has-inline-alert': !!alert,
            'is-active': active,
            'is-hovered': hovered,
            'is-large': large,
        }), role: "hidden" }, alert &&
        React__default.cloneElement(alert, __assign({}, alert.props, { inline: true }))));
};
Dropzone.defaultProps = {
    active: false,
    hovered: false,
    large: false,
};

var evaluateRenderProp$2 = function (prop) {
    if (typeof prop === 'function') {
        return prop();
    }
    else {
        return React__default.createElement(Icon, { type: prop });
    }
};
var EmptyState = function (_a) {
    var children = _a.children, icon = _a.icon, buttons = _a.buttons, header = _a.header;
    return (React__default.createElement("div", { className: "table-state is-empty" },
        icon && evaluateRenderProp$2(icon),
        header && React__default.createElement("h2", null, header),
        children));
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange = '\\u0300-\\u036f';
var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange = '\\u20d0-\\u20ff';
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff';
var rsComboMarksRange$1 = '\\u0300-\\u036f';
var reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange$1 = '\\u20d0-\\u20ff';
var rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']';
var rsCombo = '[' + rsComboRange$1 + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange$1 + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange$1 + ']?';
var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return _hasUnicode(string)
    ? _unicodeToArray(string)
    : _asciiToArray(string);
}

var _stringToArray = stringToArray;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString_1(string);

    var strSymbols = _hasUnicode(string)
      ? _stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? _castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst;

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = _createCaseFirst('toUpperCase');

var upperFirst_1 = upperFirst;

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst_1(toString_1(string).toLowerCase());
}

var capitalize_1 = capitalize;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return _arrayMap(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$2.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag$1 = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : _baseValues(object, keys_1(object));
}

var values_1 = values;

var filterControlStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};
var inlineClearButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '20px',
};
var FilterableList = /** @class */ (function (_super) {
    __extends(FilterableList, _super);
    function FilterableList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.handlers = {};
        _this.handleFilterChange = function (filterName, event) {
            var value = event.target.value;
            _this.setState((_a = {}, _a[filterName] = value, _a), _this.props.onChange);
            var _a;
        };
        _this.handleClear = function (event) {
            if (_this.props.onClear) {
                return _this.props.onClear(event);
            }
            for (var _i = 0, _a = Object.keys(_this.state); _i < _a.length; _i++) {
                var key = _a[_i];
                _this.setState((_b = {}, _b[key] = '', _b));
            }
            var _b;
        };
        for (var _i = 0, _a = props.filterTypes; _i < _a.length; _i++) {
            var name = _a[_i];
            if (name) {
                _this.state[name] = '';
                _this.handlers["handleFilter" + capitalize_1(name) + "Change"] = _this.handleFilterChange.bind(_this, name);
            }
            else {
                _this.state.value = '';
                _this.handlers["handleFilterChange"] = _this.handleFilterChange.bind(_this, 'value');
            }
        }
        return _this;
    }
    FilterableList.createClass = function (props) {
        return /** @class */ (function (_super) {
            __extends(FilterableListContainer, _super);
            function FilterableListContainer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FilterableListContainer.prototype.render = function () {
                return React__default.createElement(FilterableList, __assign({}, props, { items: this.props.items }));
            };
            return FilterableListContainer;
        }(React.PureComponent));
    };
    Object.defineProperty(FilterableList.prototype, "filteredItems", {
        get: function () {
            // If a function to filter items is passed in, then use that.
            var _a = this.props, onFilter = _a.onFilter, items = _a.items;
            if (onFilter) {
                return onFilter(items, this.state);
            }
            var filters = values_1(this.state)
                .join()
                .toLowerCase();
            var includesFilters = function (value) {
                return value
                    .toString()
                    .toLowerCase()
                    .includes(filters);
            };
            return items.filter(function (item) {
                if (typeof item === 'string') {
                    return includesFilters(item);
                }
                return values_1(item)
                    .map(includesFilters)
                    .some(identity_1);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterableList.prototype, "clearButton", {
        get: function () {
            return (React__default.createElement(ButtonList, { style: inlineClearButtonStyle },
                React__default.createElement(Button, { small: true, type: "secondary", onClick: this.handleClear }, this.props.clearButtonLabel)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterableList.prototype, "showClearButtonInHeader", {
        get: function () {
            return this.props.showClearButton && this.props.clearButtonInHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterableList.prototype, "showClearButtonInline", {
        get: function () {
            return this.props.showClearButton && !this.props.clearButtonInHeader;
        },
        enumerable: true,
        configurable: true
    });
    FilterableList.prototype.render = function () {
        var _a = this.props, clearButtonLabel = _a.clearButtonLabel, title = _a.title, showClearButton = _a.showClearButton, renderControls = _a.renderControls, renderItems = _a.renderItems;
        return (React__default.createElement("section", { className: "FilterableList" },
            React__default.createElement("div", { className: "filter-wrap" },
                React__default.createElement("div", { className: "filter-header" },
                    React__default.createElement("p", { className: "filter-title" }, title),
                    this.showClearButtonInHeader && this.clearButton),
                React__default.createElement("div", { className: "filter-list", style: filterControlStyle },
                    renderControls(__assign({}, this.state, this.handlers), this.handleFilterChange),
                    this.showClearButtonInline && this.clearButton)),
            React__default.createElement("div", { className: "FilterableListItems" }, renderItems(this.filteredItems))));
    };
    FilterableList.defaultProps = {
        clearButtonInHeader: false,
        clearButtonLabel: 'Clear',
        filterTypes: [''],
        showClearButton: false,
    };
    return FilterableList;
}(React.PureComponent));

var Footer = function (_a) {
    var children = _a.children, icon = _a.icon, header = _a.header;
    return (React__default.createElement("p", { className: "small is-center" },
        icon &&
            React__default.createElement("span", null,
                React__default.createElement(Icon, { type: icon }),
                ' '),
        header &&
            React__default.createElement("strong", null, header + " "),
        children));
};

var FragmentLoader = function () {
    return (React__default.createElement("svg", { className: "fragment-loader" },
        React__default.createElement("rect", { className: "fragment-square left", width: "10", height: "10" }),
        React__default.createElement("rect", { className: "fragment-square middle", width: "10", height: "10" }),
        React__default.createElement("rect", { className: "fragment-square right", width: "10", height: "10" })));
};

var Meter = function (_a) {
    var title = _a.title, value = _a.value;
    return (React__default.createElement("div", { className: "meter-container" },
        React__default.createElement("span", { className: "meter-title" }, title),
        ' ',
        React__default.createElement("span", { className: "meter-value" },
            value,
            "%"),
        React__default.createElement("div", { className: "meter-bar" },
            React__default.createElement("div", { className: classNames('meter-bar-fill', {
                    'is-above-50': value >= 50,
                    'is-below-25': value < 25,
                    'is-below-50': value < 50 && value >= 25,
                }), style: { width: value + "%" } }))));
};

var NumberedStep = function (_a) {
    var children = _a.children, header = _a.header;
    return (React__default.createElement("li", null,
        React__default.createElement("h3", null, header),
        children));
};
var NumberedSteps = function (_a) {
    var children = _a.children;
    return (React__default.createElement("ol", { className: "numbered-steps" }, children));
};

var Progress = function (_a) {
    var children = _a.children, vertical = _a.vertical;
    return (React__default.createElement("section", { className: classNames('progress-container', {
            'is-vertical': vertical,
        }) },
        React__default.createElement("ul", { className: "progress-stages" }, children)));
};
Progress.defaultProps = {
    vertical: false,
};
var ProgressStage = function (_a) {
    var label = _a.children, done = _a.done, selected = _a.selected;
    return (React__default.createElement("li", { className: classNames({
            'is-done': done,
            'is-selected': selected,
        }) },
        React__default.createElement("label", null, label)));
};
ProgressStage.defaultProps = {
    done: false,
    selected: false,
};

var headerStyle = {
    marginTop: 10,
};
var headingStyle = {
    color: '#294661',
    fontFamily: 'Colfax,Proxima Nova,Helvetica,sans-serif',
    fontWeight: 300,
};
var PageHeader = function (_a) {
    var children = _a.children;
    return (React__default.createElement("header", null, children));
};
var PageHeading = function (_a) {
    var children = _a.children, title = _a.title;
    return (React__default.createElement("div", { className: "content-header", style: headerStyle },
        React__default.createElement("h1", { style: headingStyle }, title),
        children && React__default.createElement("div", { className: "btn-list" }, children)));
};
PageHeading.defaultProps = {
    title: '',
};

var map$3 = React__default.Children.map;
var radioGroupMapper = function (props) { return (map$3(props.children, function (child) { return (child && (React__default.createElement(child.type, __assign({ key: child.props.value, name: props.name, onChange: props.onChange }, child.props)))); })); };
var RadioGroup = function (props) { return (React__default.createElement(React.Fragment, null, radioGroupMapper(props))); };
var Radio = function (_a) {
    var checked = _a.checked, children = _a.children, defaultChecked = _a.defaultChecked, disabled = _a.disabled, id = _a.id, label = _a.label, name = _a.name, onChange = _a.onChange, value = _a.value;
    id = id || "radio-" + value.toLowerCase();
    return (React__default.createElement("div", { className: "input-radio-wrap" },
        React__default.createElement("input", { checked: checked, defaultChecked: defaultChecked, disabled: disabled, id: id, name: name, onChange: onChange, type: "radio", value: value }),
        React__default.createElement("label", { className: "input-radio-label", htmlFor: id }, label)));
};
var StatefulRadio = /** @class */ (function (_super) {
    __extends(StatefulRadio, _super);
    function StatefulRadio(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: props.checked,
        };
        _this.handleChange = _this
            .handleChange
            .bind(_this);
        return _this;
    }
    StatefulRadio.prototype.handleChange = function (event) {
        var _this = this;
        event.persist();
        this.setState({
            checked: !this.state.checked,
        }, function () {
            _this
                .props
                .onChange(event);
        });
    };
    StatefulRadio.prototype.render = function () {
        return (React__default.createElement(Radio, __assign({}, this.props, { checked: this.state.checked, onChange: this.handleChange }), this.props.children));
    };
    return StatefulRadio;
}(React__default.Component));

var SideModal = /** @class */ (function (_super) {
    __extends(SideModal, _super);
    function SideModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SideModal.prototype.componentWillReceiveProps = function (nextProps) {
        modalWillReceiveProps(nextProps, this.props);
    };
    SideModal.prototype.render = function () {
        return (React__default.createElement(React.Fragment, null,
            React__default.createElement("div", { className: classNames('side-modal', { 'is-visible': this.props.isOpen }) }, this.props.children),
            React__default.createElement("div", { className: classNames('modal-mask', { 'is-visible': this.props.isOpen }), onClick: this.props.onClose })));
    };
    SideModal.defaultProps = { bodyNode: document.body };
    return SideModal;
}(React__default.Component));

var Slider = function (_a) {
    var value = _a.value, id = _a.id, label = _a.label, handleChange = _a.onChange;
    return (React__default.createElement("div", { className: "input-range-wrap" },
        React__default.createElement("input", { id: id, max: "100", min: "0", onChange: handleChange, type: "range", value: value }),
        label && React__default.createElement("div", { className: "input-range-percent" },
            value,
            "%")));
};
var StatefulSlider = /** @class */ (function (_super) {
    __extends(StatefulSlider, _super);
    function StatefulSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.value,
        };
        _this.handleChange = function (event) {
            var value = event.target.value;
            _this.setState({ value: value }, function () {
                _this.props.onChange(event, value);
            });
        };
        return _this;
    }
    StatefulSlider.prototype.render = function () {
        var onChange = this.props.onChange;
        var value = this.state.value;
        return (React__default.createElement(Slider, __assign({}, this.props, { value: value, onChange: this.handleChange })));
    };
    return StatefulSlider;
}(React__default.Component));
Slider.defaultProps = {
    label: true,
    value: 0,
};

var SegmentTerm = /** @class */ (function (_super) {
    __extends(SegmentTerm, _super);
    function SegmentTerm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SegmentTerm.prototype, "termControls", {
        get: function () {
            var _a = this.props, isEditable = _a.isEditable, isEditing = _a.isEditing, onCancel = _a.onCancel, onConfirm = _a.onConfirm, showConfirm = _a.showConfirm;
            if (isEditing) {
                return (React__default.createElement(ButtonList, null,
                    showConfirm &&
                        React__default.createElement(Button, { type: "secondary", small: true, onClick: onConfirm },
                            React__default.createElement(Icon, { type: "check-thin" })),
                    React__default.createElement(Button, { type: "danger", small: true, onClick: onCancel },
                        React__default.createElement(Icon, { type: "x" }))));
            }
            if (isEditable) {
                return React__default.createElement(Icon, { type: "pencil", className: "segment-term-edit" });
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    SegmentTerm.prototype.render = function () {
        var _a = this.props, hasAddButton = _a.hasAddButton, hasSeparator = _a.hasSeparator, isEditable = _a.isEditable, isEditing = _a.isEditing, label = _a.label, onAddButtonClick = _a.onAddButtonClick, onEdit = _a.onEdit, queryName = _a.queryName, renderInputs = _a.renderInputs, title = _a.title;
        return (React__default.createElement("div", { className: "segment-term-wrap" },
            React__default.createElement("p", { className: "segment-term-title" }, title),
            React__default.createElement("div", { className: classNames('segment-term', { 'has-separator': hasSeparator, 'is-editable': isEditing }), onClick: (isEditable && !isEditing) ? onEdit : undefined },
                isEditing && renderInputs && renderInputs(),
                !isEditing &&
                    React__default.createElement("p", null, label + " ",
                        React__default.createElement("strong", null, queryName)),
                this.termControls),
            hasAddButton &&
                React__default.createElement(ButtonList, null,
                    React__default.createElement(Button, { type: "secondary", icon: "plus", onClick: onAddButtonClick }, "Add Condition"))));
    };
    SegmentTerm.defaultProps = {
        hasAddButton: false,
        hasSeparator: false,
        isEditable: false,
        isEditing: false,
    };
    return SegmentTerm;
}(React.PureComponent));

var TableBody = function (_a) {
    var children = _a.children, className = _a.className;
    return (React__default.createElement("tbody", { className: className }, children));
};

var TableCell = function (_a) {
    var children = _a.children, className = _a.className;
    return (React__default.createElement("td", { className: className }, children));
};

var TableHeader = function (_a) {
    var children = _a.children, className = _a.className;
    return (React__default.createElement("thead", { className: className }, children));
};

var HeaderCell = /** @class */ (function (_super) {
    __extends(HeaderCell, _super);
    function HeaderCell(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            if (_this.props.sortKey) {
                if (_this.props.ascending === false) {
                    _this.props.onClick(_this.props.sortKey, false);
                }
                else {
                    _this.props.onClick(_this.props.sortKey, true);
                }
            }
        };
        return _this;
    }
    HeaderCell.prototype.render = function () {
        return (React__default.createElement("th", { className: classNames(this.props.className, { sort: !(this.props.sortKey === undefined) }, { 'sort-asc': this.props.sorted && this.props.ascending === true }, { 'sort-desc': this.props.sorted && this.props.ascending === false }), onClick: this.handleClick }, this.props.children));
    };
    return HeaderCell;
}(React__default.Component));

var TableRow = function (_a) {
    var children = _a.children, className = _a.className;
    return (React__default.createElement("tr", { className: className }, children));
};

var Table = function (_a) {
    var children = _a.children, className = _a.className;
    return (React__default.createElement("table", { className: classNames('table-wrap', className) }, children));
};

var SortableTable = /** @class */ (function (_super) {
    __extends(SortableTable, _super);
    function SortableTable(props) {
        var _this = _super.call(this, props) || this;
        _this.defaultSort = function (array, dataKey) {
            return array.sort(function (a, b) {
                var x = a[dataKey];
                var y = b[dataKey];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        };
        _this.state = {
            ascending: undefined,
            data: [],
            sortBy: undefined,
        };
        _this.handleHeaderClick = _this.handleHeaderClick.bind(_this);
        _this.sortData = _this.sortData.bind(_this);
        return _this;
    }
    SortableTable.prototype.componentDidMount = function () {
        this.sortData(this.props.headerData[0].dataKey, false);
    };
    SortableTable.prototype.handleHeaderClick = function (dataKey, descending) {
        this.sortData(dataKey, descending);
    };
    SortableTable.prototype.sortData = function (sortBy, descending) {
        var data = this.performSort(this.props.rowData, this.props.headerData, sortBy);
        if (descending) {
            this.setState({ data: data.reverse(), ascending: false, sortBy: sortBy });
        }
        else {
            this.setState({ data: data, ascending: true, sortBy: sortBy });
        }
    };
    SortableTable.prototype.render = function () {
        var _this = this;
        var ascendingState = this.state.ascending;
        var sortByKey = this.state.sortBy;
        var defaultHeaderRenderer = function (_a) {
            var name = _a.name, dataKey = _a.dataKey, onClick = _a.onClick, sort = _a.sort, ascending = _a.ascending, sortBy = _a.sortBy;
            return (React__default.createElement(HeaderCell, { sortKey: dataKey, onClick: onClick, ascending: ascendingState, sorted: dataKey === sortByKey }, name));
        };
        var defaultRowRenderer = function (_a) {
            var columns = _a.columns;
            return (React__default.createElement(TableRow, null, _this.props.headerData.map(function (header) {
                return React__default.createElement(TableCell, { key: 'header-' + header.dataKey }, columns[header.dataKey]);
            })));
        };
        var HeaderRenderer = this.props.headerRenderer || defaultHeaderRenderer;
        var RowRenderer = this.props.rowRenderer || defaultRowRenderer;
        return (React__default.createElement(Table, null,
            React__default.createElement(TableHeader, null,
                React__default.createElement(TableRow, null, this.props.headerData.map(function (ele, index) {
                    return React__default.createElement(HeaderRenderer, __assign({}, ele, { onClick: _this.handleHeaderClick, sortBy: sortByKey, ascending: ascendingState, key: 'header-' + ele.dataKey }));
                }))),
            React__default.createElement(TableBody, null, this.state.data.map(function (ele, index) { return React__default.createElement(RowRenderer, { key: 'row-' + index, columns: ele }); }))));
    };
    SortableTable.prototype.performSort = function (rowData, headerData, sortBy) {
        var sortIndex = headerData.findIndex(function (ele) { return ele.dataKey === sortBy; });
        var data = [];
        if (typeof headerData[sortIndex].sort === 'function') {
            data = headerData[sortIndex].sort(rowData, headerData[sortIndex].dataKey);
        }
        else {
            data = this.defaultSort(rowData, headerData[sortIndex].dataKey);
        }
        return data;
    };
    return SortableTable;
}(React__default.Component));

var findActiveIndex = function (components) {
    var activeIndex = React.Children.map(components, function (component) { return component.props.active; }).indexOf(true);
    if (activeIndex === -1) {
        return 0;
    }
    return activeIndex;
};

var map$4 = React__default.Children.map;
var Tab = function (_a) {
    var active = _a.active, children = _a.children, handleClick = _a.onClick, number = _a.number;
    return (React__default.createElement("li", { className: classNames('tab', {
            'is-active': active,
        }), onClick: handleClick },
        children,
        " ",
        number && React__default.createElement("span", { className: "tab-number" }, number)));
};
Tab.defaultProps = {
    active: false,
};
var Tabs = function (_a) {
    var centered = _a.centered, children = _a.children, zeroBorder = _a.zeroBorder, onChange = _a.onChange;
    return (React__default.createElement("ul", { className: classNames('tab-wrapper', {
            'is-centered': centered,
            'zero-border': zeroBorder,
        }) }, map$4(children, function (tab, index) {
        return React__default.cloneElement(tab, {
            onClick: function (event) {
                var _a = tab.props, label = _a.children, onClick = _a.onClick;
                onClick(event);
                onChange(event, label, index);
            },
        });
    })));
};
var StatefulTabs = /** @class */ (function (_super) {
    __extends(StatefulTabs, _super);
    function StatefulTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: findActiveIndex(_this.props.children),
        };
        _this.handleChange = function (event, label, index) {
            var handleChange = _this.props.onChange;
            _this.setState({
                activeIndex: index,
            }, function () {
                handleChange(event, label, index);
            });
        };
        return _this;
    }
    StatefulTabs.prototype.render = function () {
        var activeIndex = this.state.activeIndex;
        var tabs = map$4(this.props.children, function (tab, index) {
            return React__default.cloneElement(tab, {
                active: index === activeIndex,
            });
        });
        return (React__default.createElement(Tabs, __assign({}, this.props, { onChange: this.handleChange }), tabs));
    };
    return StatefulTabs;
}(React__default.Component));

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
    return (React__default.createElement("div", { className: classes, style: this.inputStyle },
        React__default.createElement("label", { className: "input-text-label", htmlFor: this.props.id }, this.props.label),
        React__default.createElement("input", { id: this.props.id, value: this.props.value, type: this.props.type, onChange: this.onValueChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, "aria-describedby": infoId }),
        this.props.info && (React__default.createElement("span", { className: classNames('input-info', {
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
}(React__default.Component));
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
}(React__default.Component));

var map$5 = React__default.Children.map;
var ToggleButtons = function (_a) {
    var children = _a.children, onChange = _a.onChange;
    return (React__default.createElement("div", { className: "btn-group" }, map$5(children, function (button, index) {
        return React__default.cloneElement(button, {
            onClick: function (event) {
                var _a = button.props, label = _a.children, onClick = _a.onClick;
                onClick(event);
                onChange(event, label, index);
            },
            type: 'group-item',
        });
    })));
};
var StatefulToggleButtons = /** @class */ (function (_super) {
    __extends(StatefulToggleButtons, _super);
    function StatefulToggleButtons() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: findActiveIndex(_this.props.children),
        };
        return _this;
    }
    StatefulToggleButtons.prototype.render = function () {
        var activeIndex = this.state.activeIndex;
        var buttons = map$5(this.props.children, function (button, index) {
            return React__default.cloneElement(button, {
                active: index === activeIndex,
            });
        });
        return (React__default.createElement(ToggleButtons, __assign({}, this.props, { onChange: this.handleChange }), buttons));
    };
    StatefulToggleButtons.prototype.handleChange = function (event, label, index) {
        var handleChange = this.props.onChange;
        this.setState({
            activeIndex: index,
        }, function () {
            handleChange(event, label, index);
        });
    };
    return StatefulToggleButtons;
}(React__default.Component));

var Tooltip = function (_a) {
    var content = _a.content, direction = _a.direction, className = _a.className, children = _a.children;
    return (React__default.createElement("span", { className: className, "data-tooltip": content, "data-tooltip-pos": direction }, children));
};
var HTMLTooltip = /** @class */ (function (_super) {
    __extends(HTMLTooltip, _super);
    function HTMLTooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
        };
        _this.handleHoverIn = function () {
            _this.setState({ hovered: true, opened: true, tooltipHeight: _this.tooltipRef.offsetHeight });
        };
        _this.handleHoverOut = function () {
            _this.setState({ hovered: false });
            setTimeout(function () {
                if (!_this.state.hovered) {
                    _this.setState({ opened: false });
                }
            }, _this.props.debounce);
        };
        _this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
        };
        _this.handleHoverIn = _this.handleHoverIn.bind(_this);
        _this.handleHoverOut = _this.handleHoverOut.bind(_this);
        return _this;
    }
    HTMLTooltip.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.state.opened === nextState.opened) {
            return false;
        }
        return true;
    };
    HTMLTooltip.prototype.render = function () {
        var _this = this;
        return (React__default.createElement("div", null,
            React__default.createElement("div", { className: "tooltip-js-parent", onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, this.props.hoverTarget),
            React__default.createElement("div", { className: classNames("tooltip-js-content " + this.props.className, {
                    'is-left': this.props.direction === 'left',
                    'is-visible': this.state.opened,
                }), style: { top: -(this.state.tooltipHeight / 2) - 3 }, ref: function (input) {
                    _this.tooltipRef = input;
                }, onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, this.props.children)));
    };
    HTMLTooltip.defaultProps = {
        className: '',
        debounce: 1000,
        direction: 'right',
    };
    return HTMLTooltip;
}(React__default.Component));

var TruncatedList = function (_a) {
    var items = _a.items, _b = _a.limit, limit = _b === void 0 ? 3 : _b, className = _a.className, link = _a.link, renderItems = _a.renderItems, renderMore = _a.renderMore;
    var shown = items.slice(0, limit);
    var shownText = shown.join(', ');
    var truncated = items.slice(limit);
    var numberOfAdditionalItems = truncated.length;
    var hasAdditionalItems = numberOfAdditionalItems > 0;
    var additionalItemText = (React__default.createElement("span", null,
        ",",
        ' ',
        React__default.createElement("abbr", null,
            React__default.createElement("a", { href: link },
                "+",
                numberOfAdditionalItems,
                " more"))));
    return (React__default.createElement("span", { className: className },
        renderItems ? renderItems(shown) : shownText,
        renderMore && renderMore(numberOfAdditionalItems.toString(), link),
        !renderMore && hasAdditionalItems && additionalItemText));
};

exports.Action = Action;
exports.Actions = Actions;
exports.ActionsCell = ActionsCell;
exports.Alert = Alert;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.Buttonized = Buttonized;
exports.ButtonList = ButtonList;
exports.Card = Card;
exports.CenterModal = CenterModal;
exports.Column = Column;
exports.Checkbox = Checkbox;
exports.Row = Row;
exports.ConfirmationModal = ConfirmationModal;
exports.Divider = Divider;
exports.DropdownButton = DropdownButton;
exports.Dropzone = Dropzone;
exports.EmptyState = EmptyState;
exports.FilterableList = FilterableList;
exports.SmallFooter = Footer;
exports.Icon = Icon;
exports.Loader = Loader;
exports.FragmentLoader = FragmentLoader;
exports.Meter = Meter;
exports.NumberedStep = NumberedStep;
exports.NumberedSteps = NumberedSteps;
exports.Progress = Progress;
exports.ProgressStage = ProgressStage;
exports.PageHeader = PageHeader;
exports.PageHeading = PageHeading;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.SideModal = SideModal;
exports.Slider = Slider;
exports.SegmentTerm = SegmentTerm;
exports.SortableTable = SortableTable;
exports.Tab = Tab;
exports.Tabs = Tabs;
exports.Table = Table;
exports.TableRow = TableRow;
exports.HeaderCell = HeaderCell;
exports.TableCell = TableCell;
exports.TableHeader = TableHeader;
exports.TableBody = TableBody;
exports.TextInput = TextInput;
exports.ToggleButtons = ToggleButtons;
exports.Tooltip = Tooltip;
exports.HTMLTooltip = HTMLTooltip;
exports.TruncatedList = TruncatedList;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
