import * as React from 'react';
import { IconType } from '../types/icons';

export type IconProps = {
  type: IconType;
};

const Icon: React.SFC<IconProps> = ({ type }) => (
  <i className={`sg-icon sg-icon-${type}`} />
);

export default Icon;
