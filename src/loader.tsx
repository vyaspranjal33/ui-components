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
      className={cn(Styles['sg-loader'], className, {
        [Styles['is-centered']]: centered,
        [Styles['is-large']]: large,
        [Styles['is-small']]: small,
        [Styles['loader-on-dark']]: onDark,
      })}
      {...attributes}
    >
      <rect
        className={cn(Styles['logo-square'], Styles['bottom-left'])}
        width={size}
        height={size}
      />
      <rect
        className={cn(Styles['logo-square'], Styles['bottom-middle'])}
        width={size}
        height={size}
      />
      <rect
        className={cn(Styles['logo-square'], Styles.middle)}
        width={size}
        height={size}
      />
      <rect
        className={cn(Styles['logo-square'], Styles['top-middle'])}
        width={size}
        height={size}
      />
      <rect
        className={cn(Styles['logo-square'], Styles['top-right'])}
        width={size}
        height={size}
      />
      <rect
        className={cn(Styles['logo-square'], Styles['middle-left'])}
        width={size}
        height={size}
      />
      <rect
        className={cn(Styles['logo-square'], Styles['middle-right'])}
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
