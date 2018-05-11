import React from 'react';
import Icon from './icon';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export interface ActionsProps {
  children:
    React.ReactElement<ActionProps> |
    Array<React.ReactElement<ActionProps>>;
  className?: string;
}

export const Actions: React.SFC<ActionsProps> = ({ children, className, ...attributes }) => {
  return (
    <div className={cn('actions', className)} {...attributes}>
      <Icon type="ellipsis" />
      <div className="action-icons">{children}</div>
    </div>
  );
};

export const ActionsCell: React.SFC<ActionsProps> = ({ children, className, ...attributes }) => {
  return (
    <td className={cn('actions', className)} {...attributes}>
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
  ...attributes,
}) => {
  return (
    <span data-tooltip={title} data-tooltip-pos="up" onClick={handleClick} {...attributes}>
      <Icon type={icon} />
    </span>
  );
};

export default Actions;
