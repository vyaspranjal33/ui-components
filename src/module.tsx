import React from 'react';

import Card from './card';
import Icon from './icon';

import cn from './utilities/classnames';

import { IconType } from './types/icons';
import { ModuleType } from './types/modules';

const iconTypes: {[k: string]: IconType} = {
  'button': 'button',
  'code': 'code',
  'columns': 'columns',
  'divider': 'divider',
  'image': 'images',
  'image-text': 'image-text',
  'social': 'social',
  'spacer': 'spacer',
  'text': 'text',
  'unsubscribe': 'unsubscribe',
};

const titles = {
  'button': 'Button',
  'code': 'Code',
  'columns': 'Columns',
  'divider': 'Divider',
  'image': 'Image',
  'image-text': 'Image & Text',
  'social': 'Social',
  'spacer': 'Spacer',
  'text': 'Text',
  'unsubscribe': 'Unsubscribe',
};

export interface ModuleProps {
  type: ModuleType;
  className?: string;
}

export const Module: React.SFC<ModuleProps> = ({
  type,
  className,
}) => {

  return (
    <Card
      centered
      thin
      className={cn('card', 'is-module', className)}
    >
      <p>
        <Icon type={iconTypes[type]} />
        {titles[type]}
      </p>
    </Card>
  );
};

export default Module;
