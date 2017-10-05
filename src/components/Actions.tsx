import * as React from 'react';
import Icon from './Icon';
import { IconType } from '../types/icons';

export type ActionsProps = {
  children: React.ReactElement<ActionProps> | React.ReactElement<ActionProps>[];
};

export const Actions: React.SFC<ActionsProps> = ({ children }) => {
  return (
    <div className="actions">
      <Icon type="ellipsis" />
      <div className="action-icons">{children}</div>
    </div>
  );
};

export type ActionProps = {
  title: string;
  icon: IconType;
  onClick: (event: any) => void;
};

export const Action: React.SFC<ActionProps> = ({
  title,
  icon,
  onClick: handleClick,
}) => {
  return (
    <span data-tooltip={title} data-tooltip-pos="up" onClick={handleClick}>
      <Icon type={icon} />
    </span>
  );
};

export default Actions;
