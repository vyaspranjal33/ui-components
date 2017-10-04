import * as React from 'react';
import { IconType } from '../types/icons';

export type IconProps = {
  type: IconType;
  onClick?: (event: any) => void;
};

const Icon: React.SFC<IconProps> = ({ type, onClick: handleClick }) => (
  <i className={`sg-icon sg-icon-${type}`} onClick={handleClick} />
);

export default Icon;
