import React from 'react';
import Icon from './icon';
import { IconType } from './types/icons';

export interface ActionsProps {
  children:
    React.ReactElement<ActionProps> |
    Array<React.ReactElement<ActionProps>>;
}

export const Actions: React.SFC<ActionsProps> = ({ children, ...passThroughProps }) => {
  return (
    <div className="actions" {...passThroughProps}>
      <Icon type="ellipsis" />
      <div className="action-icons">{children}</div>
    </div>
  );
};

export const ActionsCell: React.SFC<ActionsProps> = ({ children, ...passThroughProps }) => {
  return (
    <td className="actions" {...passThroughProps}>
      <Icon type="ellipsis" />
      <div className="action-icons">{children}</div>
    </td>
  );
};

export interface ActionProps {
  title: string;
  icon: IconType;
  onClick: (event: any) => void;
}

export const Action: React.SFC<ActionProps> = ({
  title,
  icon,
  onClick: handleClick,
  ...passThroughProps,
}) => {
  return (
    <span data-tooltip={title} data-tooltip-pos="up" onClick={handleClick} {...passThroughProps}>
      <Icon type={icon} />
    </span>
  );
};

export default Actions;
