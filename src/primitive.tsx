import React, { Fragment, ReactElement } from 'react';

export const Primitive: React.SFC<any> = (props) => {
  const newChildren = React.Children.map(props.children, (child) => {
      if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<any>, { primitiveProps: { ...props } });
      }
    },
  );

  return (
    <Fragment>
      {newChildren}
    </Fragment>
  );
};
