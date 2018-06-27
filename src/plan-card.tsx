import cn from 'classnames';
import React, { Fragment } from 'react';
import { Badge } from './badge';
import { Button } from './button';
import { Card } from './card';
import { DetailsRow } from './details-row';
import { Icon } from './icon';
import Styles from './styles/plan-card.module.scss';

export interface PlanCardProps {
  planTitle?: string;
  recommended?: boolean;
  selectedPackage?: string;
  packageDetails?: Array<object>;
  planDetails?: Array<object>;
}

function renderPackageDetails(
  packageDetails: Array<any>,
  selectedPackage: string
) {
  return packageDetails.map(p => (
    <div className={cn(Styles['packages-container'])}>
      <Card className={cn(Styles['card-padding'])} inline thin title="">
        <div className={cn(Styles.col1, Styles.small)}>
          <h3 className={cn(Styles['package-name'])}>{p.name}</h3>
          <p>{p.packageSummary}</p>
        </div>
        <div className={cn(Styles.small, Styles['plan-status'])}>
          {p.name === selectedPackage ? (
            <Icon
              className={cn(Styles['small-icon'], Styles.mantis)}
              type="check"
            />
          ) : null}
          {p.name === selectedPackage ? (
            'Your Current Plan'
          ) : (
            <p className={cn(Styles.price)}>
              ${p.price}/mo*
              <Button
                className={cn(Styles['select-btn'])}
                type="secondary"
                onClick={null}
                small
              >
                Select
              </Button>
            </p>
          )}
        </div>
      </Card>
      <br />
    </div>
  ));
}
function renderPlanDetails(planDetails: Array<any>) {
  return planDetails.map(p => (
    <DetailsRow
      available={p.available}
      title={p.title}
      tooltipContent={p.toolTip}
    />
  ));
}

export const PlanCard: React.SFC<PlanCardProps> = ({
  planTitle,
  recommended,
  selectedPackage,
  packageDetails,
  planDetails,
}) => (
  <div className={cn(Styles['plan-card'])}>
    <div className={cn(Styles.col1)}>
      <h2>
        {planTitle}&nbsp;&nbsp;&nbsp;{recommended ? (
          <Badge className={cn(Styles['plan-card'])} gradient>
            RECOMMENDED
          </Badge>
        ) : null}
      </h2>
      {renderPlanDetails(planDetails)}
      <a className={cn(Styles.small, Styles.link)} href="#">
        See Full Plan Comparison
      </a>
    </div>
    {renderPackageDetails(packageDetails, selectedPackage)}
    {planTitle === 'Free' ? null : (
      <p
        className={cn(
          Styles['plan-card'],
          Styles.small,
          Styles['taxes-footnote']
        )}
      >
        {' '}
        * Taxes may apply
      </p>
    )}
  </div>
);

export default PlanCard;
