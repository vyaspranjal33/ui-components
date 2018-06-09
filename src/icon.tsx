import React from 'react';
import IconSizeType from './types/icon-sizes';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export interface IconProps {
  type: IconType;
  className?: string;
  onClick?: (event: any) => void;
  onDark?: boolean;
  size?: IconSizeType;
  style?: { [key: string]: string };
}

const lightStyle = { color: 'white' };

export const Icon: React.SFC<IconProps> = ({
  type,
  className,
  onClick: handleClick,
  onDark,
  size,
  style,
  ...attributes
}) => {
  let iconStyle;
  if (onDark) {
    iconStyle = { ...style, ...lightStyle };
  } else {
    iconStyle = style;
  }

  return (
    <i
      className={cn('sg-icon', `sg-icon-${type}`, {
        [className]: !!className,
        [`is-size-${size}`]: size,
      })}
      onClick={handleClick}
      style={iconStyle}
      {...attributes}
    />
  );
};

Icon.defaultProps = {
  className: '',
  onDark: false,
  style: {},
};

export default Icon;
