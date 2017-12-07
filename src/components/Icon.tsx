import React from 'react';
import { IconType } from '../types/icons';
import cn from '../utilities/classnames';

export interface IconProps {
  type: IconType;
  onClick?: (event: any) => void;
}

export const Icon: React.SFC<IconProps> = ({ type, onClick: handleClick }) => (
  <i className={`sg-icon sg-icon-${type}`} onClick={handleClick} />
);

export default Icon;
