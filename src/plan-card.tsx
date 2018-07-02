import cn from 'classnames';
import React, { Fragment } from 'react';
import { Badge } from './badge';
import { Button } from './button';
import { Card } from './card';
import { FeatureList } from './feature-list';
import { Icon } from './icon';
import Styles from './styles/plan-card.module.scss';

export interface PlanCardProps {
  planTitle?: string;
  recommended?: boolean;
  selectedPackage?: string;
  packageDetails?: Array<object>;
  planDetails: Array<{
    available?: boolean;
    title?: string;
    toolTip?: string;
  }>;
}

function renderPackageDetails(
  packageDetails: Array<any>,
  selectedPackage: string
) {
  return packageDetails.map(p => (
    <div className={Styles['packages-container']}>
      <Card className={Styles['card-padding']} inline thin title="">
        <div className={cn(Styles.col1, Styles.small)}>
          <h3 className={Styles['package-name']}>{p.name}</h3>
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
            <p className={Styles.price}>
              ${p.price}/mo*
              <Button
                className={Styles['select-btn']}
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
    </div>
  ));
}

export const PlanCard: React.SFC<PlanCardProps> = ({
  planTitle,
  recommended,
  selectedPackage,
  packageDetails,
  planDetails,
}) => (
  <div className={Styles['plan-card']}>
    <div className={Styles.col1}>
      <h2>
        {planTitle}&nbsp;&nbsp;&nbsp;{recommended ? (
          <Badge className={Styles['plan-card']} gradient>
            RECOMMENDED
          </Badge>
        ) : null}
      </h2>
      <FeatureList planDetails={planDetails} />
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
