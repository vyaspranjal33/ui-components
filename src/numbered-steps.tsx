import React from 'react';

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
}

export const NumberedSteps: React.SFC<NumberedStepsProps> = ({
  children,
  ...passThroughProps,
}) => (
  <ol className="numbered-steps" {...passThroughProps}>
    {children}
  </ol>
);
