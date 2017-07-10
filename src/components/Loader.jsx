// @flow
import React from 'react';
import cn from 'classnames';

export const sizes = {
  small: 'is-small',
  large: 'is-large',
};

export type sizeType = $Keys<typeof sizes>;

export const StandardLoader = ({
  size,
  dark,
}: { size?: sizeType, dark?: boolean }) => (
  <svg
    className={cn('sg-loader', {
      [sizes[size]]: size,
      'loader-on-dark': dark,
    })}
  >
    <rect className="logo-square bottom-left" />
    <rect className="logo-square bottom-middle" />
    <rect className="logo-square middle" />
    <rect className="logo-square top-middle" />
    <rect className="logo-square top-right" />
    <rect className="logo-square middle-left" />
    <rect className="logo-square middle-right" />
  </svg>
);

StandardLoader.defaultProps = {
  large: false,
  small: false,
  dark: false,
};

export const FragmentLoader = ({
  size,
  dark,
}: { size?: sizeType, dark?: boolean }) => (
  <svg
    className={cn('fragment-loader', {
      [sizes[size]]: size,
      'loader-on-dark': dark,
    })}
  >
    <rect className="fragment-square left" />
    <rect className="fragment-square middle" />
    <rect className="fragment-square right" />
  </svg>
);

FragmentLoader.defaultProps = {
  large: false,
  small: false,
  dark: false,
};

export default StandardLoader;
