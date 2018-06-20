import React from 'react';
// knows what to do with 'primitiveProps'
const withNativeProps = (WrappedCmp) => {
    return (props) => {
        return React.createElement(WrappedCmp, Object.assign({}, props));
    };
};
export default withNativeProps;
//# sourceMappingURL=withNativeProps.js.map