import React from 'react';
import IconSizeType from './types/icon-sizes';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

import Styles from './styles/icon.module.scss';

export interface IconProps {
  type: IconType;
  className?: string;
  onClick?: (event: any) => void;
  onDark?: boolean;
  size?: IconSizeType;
}

const lightStyle = { color: 'white' };

export const Icon: React.SFC<IconProps> = ({
  type,
  className,
  onClick: handleClick,
  onDark,
  size,
  ...attributes
}) => (
  <i
    className={cn(Styles['sg-icon'], Styles[`sg-icon-${type}`], {
      [className]: !!className,
      [`is-size-${size}`]: size,
    })}
    onClick={handleClick}
    style={onDark ? lightStyle : null}
    {...attributes}
  />
);

Icon.defaultProps = {
  className: '',
  onDark: false,
};

export default Icon;
