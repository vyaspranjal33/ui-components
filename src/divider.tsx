import React from 'react';
import Styles from './styles/hr.module.scss';
import cn from './utilities/classnames';

export interface DividerProps {
  label?: string;
  thin?: boolean;
  className?: string;
}

export const Divider: React.SFC<DividerProps> = ({
  label,
  thin,
  className,
  ...attributes
}) => {
  return (
    <hr
      className={cn(className, {
        [Styles['has-label']]: !!label,
        [Styles['is-thin']]: thin,
      })}
      data-label={label}
      {...attributes}
    />
  );
};

Divider.defaultProps = {
  label: null,
  thin: false,
};

export default Divider;
