import React from 'react';
import Styles from './styles/loader.module.scss';
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
      className={cn('sg-loader', Styles['sg-loader'], className, {
        [Styles['is-centered']]: centered,
        'is-centered': centered,
        [Styles['is-large']]: large,
        'is-large': large,
        [Styles['is-small']]: small,
        'is-small': small,
        [Styles['loader-on-dark']]: onDark,
        'loader-on-dark': onDark,
      })}
      {...attributes}
    >
      <rect
        className={cn(
          'logo-square',
          Styles['logo-square'],
          'bottom-left',
          Styles['bottom-left']
        )}
        width={size}
        height={size}
      />
      <rect
        className={cn(
          'logo-square',
          Styles['logo-square'],
          'bottom-middle',
          Styles['bottom-middle']
        )}
        width={size}
        height={size}
      />
      <rect
        className={cn(
          'logo-square',
          Styles['logo-square'],
          'middle',
          Styles.middle
        )}
        width={size}
        height={size}
      />
      <rect
        className={cn(
          'logo-square',
          Styles['logo-square'],
          'top-middle',
          Styles['top-middle']
        )}
        width={size}
        height={size}
      />
      <rect
        className={cn(
          'logo-square',
          Styles['logo-square'],
          'top-right',
          Styles['top-right']
        )}
        width={size}
        height={size}
      />
      <rect
        className={cn(
          'logo-square',
          Styles['logo-square'],
          'middle-left',
          Styles['middle-left']
        )}
        width={size}
        height={size}
      />
      <rect
        className={cn(
          'logo-square',
          Styles['logo-square'],
          'middle-right',
          Styles['middle-right']
        )}
        width={size}
        height={size}
      />
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
