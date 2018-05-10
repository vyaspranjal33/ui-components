import React from 'react';
import cn from './utilities/classnames';

export interface NumberedStepProps {
  children:
    | React.ReactElement<any>
    | Array<React.ReactElement<any>>;
  header: string;
}

export const NumberedStep: React.SFC<NumberedStepProps> = ({
  children,
  header,
  ...passThroughProps,
}) => (
  <li {...passThroughProps}>
    <h3>{header}</h3>
    {children}
  </li>
);

export interface NumberedStepsProps {
  children:
    | React.ReactElement<NumberedStepProps>
    | Array<React.ReactElement<NumberedStepProps>>;
  className?: string;
}

export const NumberedSteps: React.SFC<NumberedStepsProps> = ({
  children,
  className,
  ...passThroughProps,
}) => (
  <ol className={cn('numbered-steps', className)} {...passThroughProps}>
    {children}
  </ol>
);
