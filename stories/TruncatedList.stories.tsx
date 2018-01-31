import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import TruncatedList from '../src/components/TruncatedList';

const stories = storiesOf('TruncatedList', module);
const singleItemList = ["Boromir"]
const list = ["Boromir", "Elrond", "Frodo", "Gimli", "Legolas"]
const limit = 2 // Default is 3

stories.add('5 strings, limit 2', () => (
  <TruncatedList
    list={list}
    limit={limit}
  />
));

stories.add('5 strings, limit default', () => (
  <TruncatedList
    list={list}
  />
));

stories.add('1 string, limit default', () => (
  <TruncatedList
    list={singleItemList}
  />
));