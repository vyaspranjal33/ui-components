import React from 'react';
import Styles from './styles/loader.module.scss';
import cn from './utilities/classnames';

export interface FragmentLoaderProps {
  className?: string;
}

export const FragmentLoader: React.SFC<FragmentLoaderProps> = ({
  className,
  ...attributes
}) => {
  return (
    <svg
      className={cn('fragment-loader', Styles['fragment-loader'], className)}
      {...attributes}
    >
      <rect
        className={cn(
          'fragment-square',
          Styles['fragment-square'],
          'left',
          Styles.left
        )}
        width="10"
        height="10"
      />
      <rect
        className={cn(
          'fragment-square',
          Styles['fragment-square'],
          'middle',
          Styles.middle
        )}
        width="10"
        height="10"
      />
      <rect
        className={cn(
          'fragment-square',
          Styles['fragment-square'],
          'right',
          Styles.right
        )}
        width="10"
        height="10"
      />
    </svg>
  );
};

export default FragmentLoader;
