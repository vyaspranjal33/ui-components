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
  ...primitiveProps,
}) => (
  <li {...primitiveProps}>
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
  ...primitiveProps,
}) => (
  <ol className="numbered-steps" {...primitiveProps}>
    {children}
  </ol>
);
