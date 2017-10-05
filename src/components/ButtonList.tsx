import * as React from 'react';
import { ButtonProps } from './Button';

export type ButtonListProps = {
  children?: React.ReactElement<ButtonProps>[];
  onDark?: boolean;
};

const { map } = React.Children;

const ButtonList: React.SFC<ButtonListProps> = ({ children, onDark }) => {
  return (
    <div className="btn-list">
      {map(children, (button: React.ReactElement<any>) => {
        return React.cloneElement(button, { onDark });
      })}
    </div>
  );
};

ButtonList.defaultProps = {
  onDark: false,
};

export default ButtonList;
