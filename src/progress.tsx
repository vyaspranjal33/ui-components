import React from 'react';
import cn from './utilities/classnames';

export interface ProgressProps {
  vertical?: boolean;
  children:
    | React.ReactElement<ProgressStageProps>
    | Array<React.ReactElement<ProgressStageProps>>;
  className?: string;
}

export const Progress: React.SFC<ProgressProps> = ({ children, vertical, className, ...passThroughProps }) => {
  return (
    <section
      className={cn('progress-container', className, {
        'is-vertical': vertical,
      })}
      {...passThroughProps}
    >
      <ul className="progress-stages">{children}</ul>
    </section>
  );
};

Progress.defaultProps = {
  vertical: false,
};

export interface ProgressStageProps {
  done?: boolean;
  selected?: boolean;
  children: string;
  className?: string;
}

export const ProgressStage: React.SFC<ProgressStageProps> = ({
  children: label,
  done,
  selected,
  className,
  ...passThroughProps,
}) => {
  return (
    <li
      className={cn(className, {
        'is-done': done,
        'is-selected': selected,
      })}
      {...passThroughProps}
    >
      <label>{label}</label>
    </li>
  );
};

ProgressStage.defaultProps = {
  done: false,
  selected: false,
};
