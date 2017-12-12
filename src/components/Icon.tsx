import React from 'react';
import { IconType } from '../types/icons';
import cn from '../utilities/classnames';

export interface IconProps {
  type: IconType;
  className?: string;
  onClick?: (event: any) => void;
}

export const Icon: React.SFC<IconProps> = ({ type, className, onClick: handleClick }) => (
  <i className={cn('sg-icon', `sg-icon-${type}`, { [className]: !!className })} onClick={handleClick} />
);

Icon.defaultProps = {
  className: '',
};

export default Icon;
