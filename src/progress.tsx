import React from 'react';
import cn from './utilities/classnames';

export interface ProgressProps {
  vertical?: boolean;
  children:
    | React.ReactElement<ProgressStageProps>
    | Array<React.ReactElement<ProgressStageProps>>;
}

export const Progress: React.SFC<ProgressProps> = ({ children, vertical }) => {
  return (
    <section
      className={cn('progress-container', {
        'is-vertical': vertical,
      })}
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
}

export const ProgressStage: React.SFC<ProgressStageProps> = ({
  children: label,
  done,
  selected,
}) => {
  return (
    <li
      className={cn({
        'is-done': done,
        'is-selected': selected,
      })}
    >
      <label>{label}</label>
    </li>
  );
};

ProgressStage.defaultProps = {
  done: false,
  selected: false,
};
