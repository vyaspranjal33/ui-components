import * as React from 'react';
import * as cn from 'classnames';

export type LoaderProps = {
  onDark?: boolean;
  large?: boolean;
  small?: boolean;
  centered?: boolean;
};

const Loader: React.SFC<LoaderProps> = ({ onDark, large, small, centered }) => {
  let size = 10;
  if (large) size *= 2;
  if (small) size /= 2;
  return (
    <svg
      className={cn('sg-loader', {
        'loader-on-dark': onDark,
        'is-large': large,
        'is-small': small,
        'is-centered': centered,
      })}
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
  onDark: false,
  large: false,
  small: false,
  centered: false,
};

export default Loader;
