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
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Switch from './index';
var stories = storiesOf('Switch', module);
var SwitchContainer = /** @class */ (function (_super) {
    __extends(SwitchContainer, _super);
    function SwitchContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            _this.setState({ on: !_this.state.on });
        };
        _this.state = { on: _this.props.on };
        return _this;
    }
    SwitchContainer.prototype.render = function () {
        return (React.createElement(Switch, __assign({}, this.props, { id: this.props.id, on: this.state.on, onChange: this.onChange })));
    };
    return SwitchContainer;
}(Component));
stories.add('Switch - On', function () { return React.createElement(SwitchContainer, { id: "switch-example-on", on: true }); });
stories.add('Switch - Off', function () { return React.createElement(SwitchContainer, { id: "switch-example-off" }); });
stories.add('Switch - Disabled', function () { return (React.createElement(SwitchContainer, { id: "switch-example-disabled", disabled: true, on: true })); });
//# sourceMappingURL=Switch.stories.js.map