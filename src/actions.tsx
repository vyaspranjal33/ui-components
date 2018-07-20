import React, { Fragment } from 'react';

import cn from './utilities/classnames';

import DropdownButton from './dropdown-button';
import Icon from './icon';
import EmailCardStyles from './styles/email-card.module.scss';

import { IconType } from './types/icons';

export interface ActionsProps {
  children:
    | React.ReactElement<ActionProps>
    | Array<boolean | React.ReactElement<ActionProps>>
    | boolean;
  className?: string;
  vertical?: boolean;
  inEmailCard?: boolean;
}

export const Actions: React.SFC<ActionsProps> = ({
  children,
  className,
  inEmailCard,
  vertical,
  ...attributes
}) => {
  const actions = React.Children.map(children, child => {
    if (!child) {
      return null;
    }
    return React.cloneElement(child as React.ReactElement<any>, {
      showTitle: vertical,
    });
  });

  return (
    <div
      className={cn(
        {
          actions: !inEmailCard,
          [EmailCardStyles['email-row-actions']]: inEmailCard,
        },
        className
      )}
      {...attributes}
    >
      {vertical ? (
        <DropdownButton gear icon="ellipsis-vertical">
          {actions}
        </DropdownButton>
      ) : (
        <Fragment>
          <Icon type="ellipsis" />
          <div className="action-icons">{children}</div>
        </Fragment>
      )}
    </div>
  );
};

export const ActionsCell: React.SFC<ActionsProps> = ({
  children,
  className,
  ...attributes
}) => {
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
  showTitle?: boolean;
}

export const Action: React.SFC<ActionProps> = ({
  title,
  icon,
  onClick: handleClick,
  showTitle,
  ...attributes
}) => {
  const tooltipAttributes = showTitle
    ? {}
    : {
        'data-tooltip': title,
        'data-tooltip-pos': 'up',
      };

  return (
    <span {...tooltipAttributes} onClick={handleClick} {...attributes}>
      <Icon type={icon} />
      {showTitle && title}
    </span>
  );
};

export default Actions;
