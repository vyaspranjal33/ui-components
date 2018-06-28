import { Children } from 'react';
const findActiveIndex = (components) => {
    const activeIndex = Children.map(components, (component) => component.props.active).indexOf(true);
    if (activeIndex === -1) {
        return 0;
    }
    return activeIndex;
};
export default findActiveIndex;
//# sourceMappingURL=find-active-index.js.map