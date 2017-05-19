// @flow
import React from 'react';
import cn from 'classnames';

export const StandardLoader = ({
  large,
  small,
  dark,
}: { large?: boolean, small?: boolean, dark?: boolean }) => (
  <svg>
    <svg
      className={cn('sg-loader', {
        'is-small': small,
        'is-large': large,
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
  </svg>
);

StandardLoader.defaultProps = {
  large: false,
  small: false,
  dark: false,
};

export const FragmentLoader = ({
  large,
  small,
  dark,
}: { large?: boolean, small?: boolean, dark?: boolean }) => (
  <svg
    className={cn('fragment-loader', {
      'is-small': small,
      'is-large': large,
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
