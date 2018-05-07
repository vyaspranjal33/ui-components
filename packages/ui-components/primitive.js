import React, { Fragment } from 'react';
export const Primitive = (props) => {
    const newChildren = React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { primitiveProps: Object.assign({}, props) });
        }
    });
    return (React.createElement(Fragment, null, newChildren));
};
//# sourceMappingURL=primitive.js.map