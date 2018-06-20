import React from 'react';

// knows what to do with 'primitiveProps'
const withNativeProps = (WrappedCmp: any) => {
  return (props: any) => {
    return <WrappedCmp {...props} />;
  };
};

export default withNativeProps;
