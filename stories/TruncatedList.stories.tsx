import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { TruncatedList } from '../src/components/TruncatedList';

const stories = storiesOf('Truncated List', module);
const singleItemList = ['Boromir'];
const list = ['Boromir', 'Elrond', 'Frodo', 'Gimli', 'Legolas'];
const limit = 2; // Default is 3
const objectList = [
  { name: 'Boromir', dies: true },
  { name: 'Elrond', dies: false },
  { name: 'Frodo', dies: false },
  { name: 'Gimli', dies: false },
  { name: 'Legolas', dies: false },
];

stories.add('Inline - Limit 2', () => (
  <TruncatedList
    items={list}
    limit={limit}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
  />
));

stories.add('Inline - Limit Default', () => (
  <TruncatedList
    items={list}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
  />
));

stories.add('Inline - Only 1 Item', () => (
  <TruncatedList
    items={singleItemList}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
  />
));

stories.add('HTML - Custom Renderers', () => (
  <TruncatedList
    items={objectList}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
    renderItems={items => (
      <>
        {items.map(({ name, dies }) => (
          <span key={name}>
            {name} { dies && '(Dead)' },{' '}
          </span>
        ))}
      </>
    )}
    renderMore={(numberOfItems: string, link: string) => (
      <>
        <a href={link}>and {numberOfItems} more…</a>
      </>
    )}
  />
));
