import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Actions, { Action } from '../src/actions';

const stories = storiesOf('Actions', module);

stories.add('Dropdown Actions', () => 
  <Actions vertical data-role="group-card-actions-menu">
    <Action
      title={'export'}
      icon="export"
      onClick={action('export')}
      data-role="export"
    />
    <Action
      title={'view'}
      icon="view"
      onClick={action('view')}
      data-role="view"
    />
    <Action
      title={'delete'}
      icon="trash"
      onClick={action('delete')}
      data-role="trash"
    />
  </Actions>);

const optional = false;
stories.add('Dropdown Actions with optional Actions', () => 
  <Actions vertical data-role="group-card-actions-menu">
    <Action
      title={'export'}
      icon="export"
      onClick={action('export')}
      data-role="export"
    />
    <Action
      title={'view'}
      icon="view"
      onClick={action('view')}
      data-role="view"
    />
    { optional && <Action
      title={'delete'}
      icon="trash"
      onClick={action('delete')}
      data-role="trash"
    />}
  </Actions>);
