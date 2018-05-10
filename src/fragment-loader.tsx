import React from 'react';
import cn from './utilities/classnames';

export interface FragmentLoaderProps {
  className?: string;
}

export const FragmentLoader: React.SFC<FragmentLoaderProps> = ({className, ...passThroughProps}) => {
  return (
    <svg
      className={cn('fragment-loader', className)}
      {...passThroughProps}
    >
      <rect className="fragment-square left" width="10" height="10" />
      <rect className="fragment-square middle" width="10" height="10" />
      <rect className="fragment-square right" width="10" height="10" />
    </svg>
  );
};

export default FragmentLoader;
