import React from 'react';
import cn from '../utilities/classnames';
import Styles from './grid.module.scss';

export interface RowProps {
  children?: React.ReactNode;
}

export const Row: React.SFC<RowProps> = ({ children }) => {
  return <div className={cn(Styles.row, 'row')}>{children}</div>;
};

export default Row;
