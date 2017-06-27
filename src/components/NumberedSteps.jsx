// @flow
import React from 'react';
import cn from 'classnames';
import Step from '../components/Step';

const NumberedSteps = ({ children }: { children: Step | Step[] }) => (
  <ol className={cn('numbered-steps')}>
    {children}
  </ol>
);

export default NumberedSteps;
