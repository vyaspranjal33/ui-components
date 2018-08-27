import React from 'react';
import Icon from '../icon';
import Styles from '../styles/color-palette.module.scss';
export interface AddSavedColorButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const AddSavedColorButton = ({ onClick }: AddSavedColorButtonProps) => (
  <button className={Styles['add-color-button']} onClick={onClick}>
    <Icon type="plus" />
  </button>
);
export default AddSavedColorButton;
