import React, { CSSProperties } from 'react';
import Styles from './styles/button.module.scss';
import ToggleAnything, {
  AnythingKey,
  ToggleAnythingProps,
} from './toggle-anything';
import cn from './utilities/classnames';

export interface ToggleButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const ToggleButtons: React.SFC<
  ToggleAnythingProps & ToggleButtonsProps
> = ({
  keys,
  selectedKey,
  children,
  onChange,
  className,
  style,
  ...attributes
}) => {
  return (
    <ToggleAnything keys={keys} selectedKey={selectedKey} onChange={onChange}>
      {(...args: Array<AnythingKey>) => (
        <div
          className={cn(className, 'btn-group', Styles['btn-group'])}
          style={style}
          {...attributes}
        >
          {children(...args)}
        </div>
      )}
    </ToggleAnything>
  );
};

export default ToggleButtons;
