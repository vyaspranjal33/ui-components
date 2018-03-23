(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.Progress = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

var Progress = function (_a) {
    var children = _a.children, vertical = _a.vertical;
    return (React.createElement("section", { className: classNames('progress-container', {
            'is-vertical': vertical,
        }) },
        React.createElement("ul", { className: "progress-stages" }, children)));
};
Progress.defaultProps = {
    vertical: false,
};
var ProgressStage = function (_a) {
    var label = _a.children, done = _a.done, selected = _a.selected;
    return (React.createElement("li", { className: classNames({
            'is-done': done,
            'is-selected': selected,
        }) },
        React.createElement("label", null, label)));
};
ProgressStage.defaultProps = {
    done: false,
    selected: false,
};

exports.Progress = Progress;
exports.ProgressStage = ProgressStage;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=progress.js.map
