(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global['dropdown-button'] = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

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

var Badge = function (_a) {
    var children = _a.children, color = _a.color, content = _a.content;
    return (React.createElement("span", { className: classNames('badge', color) }, children || content));
};
Badge.defaultProps = {
    children: 0,
    color: '',
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@charset \"UTF-8\";\n.button_btn-test__M9BqG {\n  position: relative;\n  display: inline-block;\n  padding: 11px 30px;\n  font-size: 13px;\n  line-height: 16px;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  transition: color 0.3s, background-color 0.3s, border-color 0.3s;\n  user-select: none; }\n  .button_btn-test__M9BqG.button_is-disabled__WiXru {\n    color: #fff;\n    pointer-events: none;\n    cursor: default;\n    background-color: #9e9e9e;\n    border-color: #9e9e9e; }\n    .button_btn-test__M9BqG.button_is-disabled__WiXru.button_btn-secondary__1Fno9, .button_btn-test__M9BqG.button_is-disabled__WiXru.button_btn-danger__2_ioi {\n      color: #9e9e9e;\n      background-color: #fff;\n      border-color: #9e9e9e; }\n  .button_btn-test__M9BqG.button_has-icon__2WYBp, .button_btn-test__M9BqG.button_btn-with-icon__1_3Kv, .button_btn-test__M9BqG.button_has-badge__1gtFd {\n    padding-right: 18px;\n    padding-left: 18px; }\n  .button_btn-test__M9BqG.button_is-loading__3jYvv {\n    pointer-events: none; }\n  .button_btn-test__M9BqG .button_sg-icon__uoOaW,\n  .button_btn-test__M9BqG .button_sg-loader__TcJYi,\n  .button_btn-test__M9BqG .button_badge__2OEGB {\n    display: block;\n    float: left;\n    margin-right: 6px; }\n  .button_btn-test__M9BqG .button_badge__2OEGB {\n    margin-bottom: 0; }\n\n.button_btn-primary__37XqP {\n  color: #fff;\n  background-color: #489be8;\n  border-color: #1a82e2; }\n  .button_btn-primary__37XqP:hover, .button_btn-primary__37XqP:focus {\n    color: #fff;\n    background-color: #1a82e2; }\n  .button_btn-primary__37XqP:active, .button_btn-primary__37XqP.button_is-active__2PGxA {\n    box-shadow: 0 1px 4px 0 rgba(26, 130, 226, 0.2); }\n  .button_btn-primary__37XqP.button_has-badge__1gtFd .button_badge__2OEGB {\n    color: #1a82e2;\n    background-color: #fff; }\n\n.button_btn-secondary__1Fno9 {\n  color: #1a82e2;\n  background-color: #fff;\n  border-color: #489be8; }\n  .button_btn-secondary__1Fno9:hover, .button_btn-secondary__1Fno9:focus {\n    color: #1a82e2;\n    background-color: #e8f2fc; }\n  .button_btn-secondary__1Fno9:active, .button_btn-secondary__1Fno9.button_is-active__2PGxA {\n    box-shadow: 0 1px 4px 0 rgba(26, 130, 226, 0.2); }\n  .button_btn-secondary__1Fno9.button_has-badge__1gtFd .button_badge__2OEGB {\n    color: #fff;\n    background-color: #1a82e2; }\n\n.button_btn-danger__2_ioi {\n  color: #fff;\n  background-color: rgba(183, 28, 28, 0.8);\n  border-color: #b71c1c; }\n  .button_btn-danger__2_ioi:hover, .button_btn-danger__2_ioi:focus {\n    color: #fff;\n    background-color: #b71c1c; }\n  .button_btn-danger__2_ioi:active, .button_btn-danger__2_ioi.button_is-active__2PGxA {\n    box-shadow: 0 1px 4px 0 rgba(26, 130, 226, 0.2);\n    color: #fff; }\n  .button_btn-danger__2_ioi.button_has-badge__1gtFd .button_badge__2OEGB {\n    color: #b71c1c;\n    background-color: #fff; }\n\n.button_btn-small__b5WtH {\n  padding: 6px 18px; }\n\n.button_btn-dropdown__3ytGn {\n  padding-right: 30px;\n  padding-left: 18px; }\n  .button_btn-dropdown__3ytGn::before {\n    font-family: \"styleguideicons\";\n    font-size: 16px;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 1;\n    text-transform: none;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    position: absolute;\n    top: 12px;\n    right: 13px;\n    color: inherit;\n    content: \"\\E900\"; }\n  .button_btn-dropdown__3ytGn.button_btn-small__b5WtH {\n    padding-right: 30px;\n    padding-left: 20px; }\n    .button_btn-dropdown__3ytGn.button_btn-small__b5WtH::before {\n      top: 7px;\n      right: 10px; }\n    .button_btn-dropdown__3ytGn.button_btn-small__b5WtH.button_btn-dropdown-gear__1QfAc {\n      padding: 0 15px 0 10px; }\n    .button_btn-dropdown__3ytGn.button_btn-small__b5WtH.button_btn-dropdown-gear__1QfAc::before {\n      top: 3px;\n      right: 1px; }\n\n.button_btn-dropdown-gear__1QfAc {\n  border: 0; }\n  .button_btn-dropdown-gear__1QfAc.button_is-active__2PGxA > .button_sg-icon__uoOaW {\n    transform: rotate(135deg); }\n  .button_btn-dropdown-gear__1QfAc::before {\n    top: 14px;\n    font-size: 16px;\n    color: #7f90a0; }\n  .button_btn-dropdown-gear__1QfAc.button_btn-primary__37XqP::before,\n  .button_btn-dropdown-gear__1QfAc.button_btn-primary__37XqP > .button_sg-icon__uoOaW {\n    color: #fff; }\n  .button_btn-dropdown-gear__1QfAc > .button_sg-icon__uoOaW {\n    display: block;\n    font-size: 18px;\n    color: #7f90a0;\n    transition: transform 0.5s; }\n\n.button_btn-on-dark__1tXzr.button_btn-secondary__1Fno9 {\n  color: #fff;\n  background-color: transparent;\n  border-color: rgba(255, 255, 255, 0.6); }\n  .button_btn-on-dark__1tXzr.button_btn-secondary__1Fno9:hover, .button_btn-on-dark__1tXzr.button_btn-secondary__1Fno9:focus {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-color: #fff; }\n  .button_btn-on-dark__1tXzr.button_btn-secondary__1Fno9.button_is-disabled__WiXru {\n    color: #9e9e9e;\n    background-color: transparent;\n    border-color: #9e9e9e; }\n    .button_btn-on-dark__1tXzr.button_btn-secondary__1Fno9.button_is-disabled__WiXru:hover, .button_btn-on-dark__1tXzr.button_btn-secondary__1Fno9.button_is-disabled__WiXru:focus {\n      background-color: inherit; }\n  .button_btn-on-dark__1tXzr.button_btn-secondary__1Fno9.button_has-badge__1gtFd .button_badge__2OEGB {\n    color: #294661;\n    background-color: #fff; }\n\n.button_btn-group__1I1p8 {\n  display: inline-block; }\n  .button_btn-group__1I1p8 > .button_btn-group-item__3Gtel {\n    float: left;\n    padding-right: 18px;\n    padding-left: 18px;\n    margin: 0;\n    color: #1a82e2;\n    background-color: #fff;\n    border-color: rgba(26, 130, 226, 0.8); }\n    .button_btn-group__1I1p8 > .button_btn-group-item__3Gtel:hover, .button_btn-group__1I1p8 > .button_btn-group-item__3Gtel:focus {\n      background-color: rgba(26, 130, 226, 0.1); }\n    .button_btn-group__1I1p8 > .button_btn-group-item__3Gtel:active {\n      box-shadow: 0 1px 4px 0 rgba(26, 130, 226, 0.2); }\n    .button_btn-group__1I1p8 > .button_btn-group-item__3Gtel:first-child {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n    .button_btn-group__1I1p8 > .button_btn-group-item__3Gtel:last-child {\n      margin-left: -1px;\n      border-bottom-right-radius: 0;\n      border-top-left-radius: 0; }\n    .button_btn-group__1I1p8 > .button_btn-group-item__3Gtel:not(:first-child):not(:last-child) {\n      margin-left: -1px;\n      border-radius: 0; }\n    .button_btn-group__1I1p8 > .button_btn-group-item__3Gtel.button_is-active__2PGxA {\n      color: #fff;\n      background-color: #489be8;\n      border-color: #1a82e2; }\n\n.button_btn-group-stacked__3AAIB .button_btn-group-item__3Gtel {\n  display: block;\n  width: 100%;\n  margin: 10px 0; }\n";
var Styles = {"btn-test":"button_btn-test__M9BqG","is-disabled":"button_is-disabled__WiXru","btn-secondary":"button_btn-secondary__1Fno9","btn-danger":"button_btn-danger__2_ioi","has-icon":"button_has-icon__2WYBp","btn-with-icon":"button_btn-with-icon__1_3Kv","has-badge":"button_has-badge__1gtFd","is-loading":"button_is-loading__3jYvv","sg-icon":"button_sg-icon__uoOaW","sg-loader":"button_sg-loader__TcJYi","badge":"button_badge__2OEGB","btn-primary":"button_btn-primary__37XqP","is-active":"button_is-active__2PGxA","btn-small":"button_btn-small__b5WtH","btn-dropdown":"button_btn-dropdown__3ytGn","btn-dropdown-gear":"button_btn-dropdown-gear__1QfAc","btn-on-dark":"button_btn-on-dark__1tXzr","btn-group":"button_btn-group__1I1p8","btn-group-item":"button_btn-group-item__3Gtel","btn-group-stacked":"button_btn-group-stacked__3AAIB"};
styleInject(css);

var lightStyle = { color: 'white' };
var Icon = function (_a) {
    var type = _a.type, className = _a.className, handleClick = _a.onClick, onDark = _a.onDark;
    return (React.createElement("i", { className: classNames('sg-icon', "sg-icon-" + type, (_b = {}, _b[className] = !!className, _b)), onClick: handleClick, style: onDark ? lightStyle : null }));
    var _b;
};
Icon.defaultProps = {
    className: '',
    onDark: false,
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
    return (React.createElement("svg", { className: classNames('sg-loader', {
            'is-centered': centered,
            'is-large': large,
            'is-small': small,
            'loader-on-dark': onDark,
        }) },
        React.createElement("rect", { className: "logo-square bottom-left", width: size, height: size }),
        React.createElement("rect", { className: "logo-square bottom-middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square top-middle", width: size, height: size }),
        React.createElement("rect", { className: "logo-square top-right", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle-left", width: size, height: size }),
        React.createElement("rect", { className: "logo-square middle-right", width: size, height: size })));
};
Loader.defaultProps = {
    centered: false,
    large: false,
    onDark: false,
    small: false,
};

/* tslint:disable:one-variable-per-declaration */
var Button = function (props) {
    return (React.createElement(Buttonized, __assign({}, props),
        React.createElement("button", null, props.children)));
};
var Buttonized = function (_a) {
    var children = _a.children, type = _a.type, badge = _a.badge, disabled = _a.disabled, loading = _a.loading, small = _a.small, onDark = _a.onDark, onClick = _a.onClick, group = _a.group, active = _a.active, icon = _a.icon, id = _a.id;
    var hasBadge = !!badge || badge === 0;
    var hasIcon = !!icon;
    var content = [];
    if (hasBadge) {
        content.push(React.createElement(Badge, { key: 1 }, badge));
    }
    if (hasIcon) {
        content.push(React.createElement(Icon, { key: 2, type: icon }));
    }
    if (loading) {
        content.push(React.createElement(Loader, { key: 3, small: true, onDark: type === 'primary' }));
    }
    // the children of the element being buttonized
    if (children.props.children) {
        content.push(children.props.children);
    }
    return (React.cloneElement(children, {
        className: classNames(Styles['btn-test'], Styles["btn-" + type], (_b = {}, _b[Styles['btn-on-dark']] = onDark, _b[Styles['btn-small']] = small, _b[Styles['has-badge']] = hasBadge, _b[Styles['has-icon']] = hasIcon || loading, _b[Styles['is-active']] = active, _b[Styles['is-disabled']] = disabled, _b[Styles['is-loading']] = loading, _b)),
        id: id,
        onClick: onClick,
    }, content));
    var _b;
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

var map = React.Children.map;
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
        var links = map(children, function (link) {
            return React.cloneElement(link, {
                className: link.props.className + " dropdown-link",
            });
        });
        return (React.createElement("div", { className: "btn-list" },
            React.createElement("div", { className: classNames('btn', 'btn-dropdown', 'dropdown', "btn-" + buttonType, {
                    'btn-dropdown-gear': gear,
                    'btn-on-dark': onDark,
                    'btn-small': small,
                    'has-badge': hasBadge,
                    'has-icon': hasIcon || loading,
                    'is-active': active,
                    'is-disabled': disabled,
                    'is-loading': loading,
                }), onClick: this.handleClick },
                !gear && hasBadge && React.createElement(Badge, null, badge),
                !gear && hasIcon && React.createElement(Icon, { type: icon, onDark: type === 'primary' }),
                gear ? React.createElement(Icon, { type: "gear" }) : label,
                React.createElement("ul", { className: "dropdown-menu" }, links))));
    };
    DropdownButton.defaultProps = Button.defaultProps;
    return DropdownButton;
}(React.Component));

exports.DropdownButton = DropdownButton;
exports.default = DropdownButton;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dropdown-button.js.map
