import React from 'react';
import Styles from './styles/loader.module.scss';
import cn from './utilities/classnames';

export const FragmentLoader: React.SFC = () => {
  return (
    <svg className={Styles['fragment-loader']}>
      <rect className={cn(Styles['fragment-square'], Styles.left)} width="10" height="10" />
      <rect className={cn(Styles['fragment-square'], Styles.middle)} width="10" height="10" />
      <rect className={cn(Styles['fragment-square'], Styles.right)} width="10" height="10" />
    </svg>
  );
};

export default FragmentLoader;
