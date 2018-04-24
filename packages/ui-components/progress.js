import React from 'react';
import cn from './utilities/classnames';
export var Progress = function (_a) {
    var children = _a.children, vertical = _a.vertical;
    return (React.createElement("section", { className: cn('progress-container', {
            'is-vertical': vertical,
        }) },
        React.createElement("ul", { className: "progress-stages" }, children)));
};
Progress.defaultProps = {
    vertical: false,
};
export var ProgressStage = function (_a) {
    var label = _a.children, done = _a.done, selected = _a.selected;
    return (React.createElement("li", { className: cn({
            'is-done': done,
            'is-selected': selected,
        }) },
        React.createElement("label", null, label)));
};
ProgressStage.defaultProps = {
    done: false,
    selected: false,
};
//# sourceMappingURL=progress.js.map