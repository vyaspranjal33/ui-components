import React from 'react';
import Styles from './styles/loader.module.scss';
import cn from './utilities/classnames';

export interface LoaderProps {
  onDark?: boolean;
  large?: boolean;
  small?: boolean;
  centered?: boolean;
}

export const Loader: React.SFC<LoaderProps> = ({ onDark, large, small, centered }) => {
  let size = 10;
  if (large) {
    size *= 2;
  }
  if (small) {
    size /= 2;
  }
  return (
    <svg
      className={cn(Styles['sg-loader'], {
        [Styles['is-centered']]: centered,
        [Styles['is-large']]: large,
        [Styles['is-small']]: small,
        [Styles['loader-on-dark']]: onDark,
      })}
    >
      <rect className={cn(Styles['logo-square'], ['bottom-left'])} width={size} height={size} />
      <rect className={cn(Styles['logo-square'], ['bottom-middle'])} width={size} height={size} />
      <rect className={cn(Styles['logo-square'], ['middle'])} width={size} height={size} />
      <rect className={cn(Styles['logo-square'], ['top-middle'])} width={size} height={size} />
      <rect className={cn(Styles['logo-square'], ['top-right'])} width={size} height={size} />
      <rect className={cn(Styles['logo-square'], ['middle-left'])} width={size} height={size} />
      <rect className={cn(Styles['logo-square'], ['middle-right'])} width={size} height={size} />
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
