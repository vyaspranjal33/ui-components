import React from 'react';
import Styles from './styles/progress.module.scss';
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
      className={cn(Styles['progress-container'], {
        [Styles['is-vertical']]: vertical,
      })}
    >
      <ul className={Styles['progress-stages']}>{children}</ul>
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
        [Styles['is-done']]: done,
        [Styles['is-selected']]: selected,
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
