import { Children } from 'react';
var findActiveIndex = function (components) {
    var activeIndex = Children.map(components, function (component) { return component.props.active; }).indexOf(true);
    if (activeIndex === -1) {
        return 0;
    }
    return activeIndex;
};
export default findActiveIndex;
//# sourceMappingURL=find-active-index.js.map