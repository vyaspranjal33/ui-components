import React from 'react';
import Styles from './styles/hr.module.scss';
import cn from './utilities/classnames';

export interface DividerProps {
  label?: string;
  thin?: boolean;
}

export const Divider: React.SFC<DividerProps> = ({ label, thin }) => {
  return (
    <hr
      className={cn({
        [Styles['has-label']]: !!label,
        [Styles['is-thin']]: thin,
      })}
      data-label={label}
    />
  );
};

Divider.defaultProps = {
  label: null,
  thin: false,
};

export default Divider;
