import React, { Fragment } from 'react';
import Icon from './icon';
import Styles from './styles/feature-list.module.scss';
import { Tooltip } from './tooltip';
import cn from './utilities/classnames';

export interface FeatureListProps {
  className?: string;
  planDetails: Array<{
    available?: boolean;
    title?: string;
    toolTip?: string;
  }>;
  children?: any;
}

export const FeatureList: React.SFC<FeatureListProps> = ({
  className,
  planDetails,
  children,
  ...attributes
}) => {
  return (
    <ul className={className}>
      {renderFeatureList(planDetails, attributes)} {children}
    </ul>
  );
};

const renderFeatureList = (
  planDetails: Array<{ available?: boolean; title?: string; toolTip?: string }>,
  attributes: any
) => {
  return planDetails.map((p, index) => {
    return (
      <li
        className={cn(
          Styles['details-row'],
          Styles.title,
          {
            [Styles.steel]: !p.available,
          },
          ...attributes
        )}
        key={index}
      >
        <Icon
          className={cn(Styles['details-row'], {
            [Styles.mantis]: p.available,
            [Styles.steel]: !p.available,
          })}
          type={p.available ? 'check' : 'x-legacy'}
        />
        <p className={cn('small', Styles['details-row'], Styles.spacing)}>
          {p.toolTip ? (
            <Tooltip
              direction="right"
              content={p.toolTip}
              className="has-underline"
              length="medium"
            >
              {' '}
              {p.title}
            </Tooltip>
          ) : (
            p.title
          )}
        </p>
      </li>
    );
  });
};

export default FeatureList;
