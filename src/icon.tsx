import React from 'react';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export interface IconProps {
  type: IconType;
  className?: string;
  onClick?: (event: any) => void;
  onDark?: boolean;
}

const lightStyle = { color: 'white' };

export const Icon: React.SFC<IconProps> = ({
  type,
  className,
  onClick: handleClick,
  onDark,
}) => (
  <i
    className={cn('sg-icon', `sg-icon-${type}`, { [className]: !!className })}
    onClick={handleClick}
    style={onDark ? lightStyle : null}
  />
);

Icon.defaultProps = {
  className: '',
  onDark: false,
};

export default Icon;
