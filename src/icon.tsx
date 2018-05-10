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
  ...primitiveProps,
}) => (
  <i
    className={cn('sg-icon', `sg-icon-${type}`, { [className]: !!className })}
    onClick={handleClick}
    style={onDark ? lightStyle : null}
    {...primitiveProps}
  />
);

Icon.defaultProps = {
  className: '',
  onDark: false,
};

export default Icon;
