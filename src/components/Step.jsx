// @flow
import React from 'react';

export type StepProps = {
  title: string,
  description: string,
};

const Step = ({ title, description }: StepProps) => (
  <li>
    <h3>{title}</h3>
    <p>
      {description}
    </p>
  </li>
);

export default Step;
