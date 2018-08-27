import React from 'react';
import cn from '../utilities/classnames';

import AddSavedColorButton from './addSavedColor';
import ColorSwatch from './colorSwatch';

import Styles from '../styles/color-palette.module.scss';

export interface SavedColorListProps {
  colors: Array<{ color: string; key: string }>;
  addColor: (event: React.MouseEvent<HTMLElement>) => void;
  removeColor: (event: React.MouseEvent<HTMLElement>, key: string) => void;
  onChange: (color: string, e: React.MouseEvent<HTMLElement>) => void;
}

const SavedColorList = ({
  colors = [] as SavedColorListProps['colors'],
  addColor,
  removeColor,
  onChange,
}: SavedColorListProps) => {
  const handleRemoveColor = (key: string) => (
    event: React.MouseEvent<HTMLElement>
  ) => removeColor(event, key);
  return (
    <section className={cn('SavedColorList', Styles['saved-color-list'])}>
      {colors.map(({ key, color }) => (
        <ColorSwatch
          color={color}
          storageKey={key}
          removeColor={handleRemoveColor(key)}
          onClick={onChange}
          key={key}
        />
      ))}
      <AddSavedColorButton onClick={addColor} />
    </section>
  );
};

export default SavedColorList;
