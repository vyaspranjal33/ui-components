import React from 'react';

import Card from './card';

import cn from './utilities/classnames';

import { ModuleType } from './types/modules';

export interface ModuleProps {
  type: ModuleType;
  className?: string;
}

export const Module: React.SFC<ModuleProps> = ({
  type,
  className,
}) => {

  const getIconClass =  (): string => {
    switch (type) {
      case 'button':
        return 'sg-icon-button';
      case 'code':
        return 'sg-icon-code';
      case 'columns':
        return 'sg-icon-columns';
      case 'divider':
        return 'sg-icon-divider';
      case 'image':
        return 'sg-icon-images';
      case 'image-text':
        return 'sg-icon-image-text';
      case 'social':
        return 'sg-icon-social';
      case 'spacer':
        return 'sg-icon-spacer';
      case 'text':
        return 'sg-icon-text';
      case 'unsubscribe':
        return 'sg-icon-unsubscribe';
      default:
        return '';
    }
  };

  const getTitle =  (): string => {
    switch (type) {
      case 'button':
        return 'Button';
      case 'code':
        return 'Code';
      case 'columns':
        return 'Columns';
      case 'divider':
        return 'Divider';
      case 'image':
        return 'Image';
      case 'image-text':
        return 'Image & Text';
      case 'social':
        return 'Social';
      case 'spacer':
        return 'Spacer';
      case 'text':
        return 'Text';
      case 'unsubscribe':
        return 'Unsubscribe';
      default:
        return '';
    }
  };

  return (
    <Card
      centered
      thin
      className={cn('card', 'is-module', className)}
    >
      <p>
        <i className={cn('sg-icon', getIconClass())}/>
        {getTitle()}
      </p>
    </Card>
  );
};

export default Module;
