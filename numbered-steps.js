import React from 'react';
export var NumberedStep = function (_a) {
    var children = _a.children, header = _a.header;
    return (React.createElement("li", null,
        React.createElement("h3", null, header),
        children));
};
export var NumberedSteps = function (_a) {
    var children = _a.children;
    return (React.createElement("ol", { className: "numbered-steps" }, children));
};
//# sourceMappingURL=numbered-steps.js.map