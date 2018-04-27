import React from 'react';
import cn from './utilities/classnames';
export const Progress = ({ children, vertical }) => {
    return (React.createElement("section", { className: cn('progress-container', {
            'is-vertical': vertical,
        }) },
        React.createElement("ul", { className: "progress-stages" }, children)));
};
Progress.defaultProps = {
    vertical: false,
};
export const ProgressStage = ({ children: label, done, selected, }) => {
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