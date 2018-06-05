import React from 'react';
import cn from './utilities/classnames';

export interface LoaderProps {
  onDark?: boolean;
  large?: boolean;
  small?: boolean;
  centered?: boolean;
  className?: string;
}

export const Loader: React.SFC<LoaderProps> = ({
  onDark,
  large,
  small,
  centered,
  className,
  ...attributes
}) => {
  let size = 10;
  if (large) {
    size *= 2;
  }
  if (small) {
    size /= 2;
  }
  return (
    <svg
      className={cn('sg-loader', className, {
        'is-centered': centered,
        'is-large': large,
        'is-small': small,
        'loader-on-dark': onDark,
      })}
      {...attributes}
    >
      <rect className="logo-square bottom-left" width={size} height={size} />
      <rect className="logo-square bottom-middle" width={size} height={size} />
      <rect className="logo-square middle" width={size} height={size} />
      <rect className="logo-square top-middle" width={size} height={size} />
      <rect className="logo-square top-right" width={size} height={size} />
      <rect className="logo-square middle-left" width={size} height={size} />
      <rect className="logo-square middle-right" width={size} height={size} />
    </svg>
  );
};

Loader.defaultProps = {
  centered: false,
  large: false,
  onDark: false,
  small: false,
};

export default Loader;
