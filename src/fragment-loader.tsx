import React from 'react';

export const FragmentLoader: React.SFC = () => {
  return (
    <svg
      className="fragment-loader"
    >
      <rect className="fragment-square left" width="10" height="10" />
      <rect className="fragment-square middle" width="10" height="10" />
      <rect className="fragment-square right" width="10" height="10" />
    </svg>
  );
};

export default FragmentLoader;
