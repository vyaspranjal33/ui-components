import React, { HTMLAttributes } from 'react';
import { ButtonProps } from './button';

export interface ButtonListProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement<ButtonProps> | Array<React.ReactElement<ButtonProps>>;
  onDark?: boolean;
}

const { map } = React.Children;

export const ButtonList: React.SFC<ButtonListProps> = ({ children, onDark }) => {
  return (
    <div className="btn-list">
      {map(children, (button?: React.ReactElement<any>) => {
        return button && React.cloneElement(button, { onDark });
      })}
    </div>
  );
};

ButtonList.defaultProps = {
  onDark: false,
};

export default ButtonList;
