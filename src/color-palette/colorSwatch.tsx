import React from 'react';
import Icon from '../icon';
import Styles from '../styles/color-palette.module.scss';
import cn from '../utilities/classnames';

export interface ColorSwatchProps {
  color: string;
  current?: boolean;
  onClick?: (color: string, e: React.MouseEvent<HTMLElement>) => void;
  removeColor?: (e: React.MouseEvent<HTMLElement>) => void;
  storageKey?: string;
}
const ColorSwatch = ({
  color,
  current = false,
  onClick,
  removeColor,
}: ColorSwatchProps) => {
  let swatch: any;
  return (
    <article
      className={cn(Styles['color-swatch'], {
        [Styles['current-color-swatch']]: current,
        [Styles['saved-color-swatch']]: removeColor,
      })}
      ref={ref => {
        swatch = ref;
      }}
      style={{
        background: color,
      }}
      onClick={event => {
        if (event.target !== swatch) {
          return;
        }
        onClick(color, event);
      }}
    >
      {removeColor && (
        <button className={Styles['remove-color']} onClick={removeColor}>
          <Icon type="x" />
        </button>
      )}
    </article>
  );
};

export default ColorSwatch;
