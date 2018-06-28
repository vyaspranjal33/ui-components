import React from 'react';

import Card from './card';
import Icon from './icon';

import { IconType } from './types/icons';
import ModuleCardType from './types/module-card';
import cn from './utilities/classnames';

import Styles from './styles/card.module.scss';

const iconTypes: { [k in ModuleCardType]: IconType } = {
  button: 'button',
  code: 'code',
  columns: 'columns',
  divider: 'divider',
  image: 'images',
  'image-text': 'image-text',
  social: 'social',
  spacer: 'spacer',
  text: 'text',
  unsubscribe: 'unsubscribe',
};

const titles: { [k in ModuleCardType]: string } = {
  button: 'Button',
  code: 'Code',
  columns: 'Columns',
  divider: 'Divider',
  image: 'Image',
  'image-text': 'Image & Text',
  social: 'Social',
  spacer: 'Spacer',
  text: 'Text',
  unsubscribe: 'Unsubscribe',
};

export interface ModuleCardProps {
  type: ModuleCardType;
  className?: string;
}

export const ModuleCard: React.SFC<ModuleCardProps> = ({
  type,
  className,
  ...attributes
}) => {
  return (
    <Card
      centered
      thin
      className={cn('is-module', Styles['is-module'], className)}
      {...attributes}
    >
      <p>
        <Icon type={iconTypes[type]} />
        {titles[type]}
      </p>
    </Card>
  );
};

export default ModuleCard;
