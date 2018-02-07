import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { TruncatedInlineList, TruncatedHTMLList } from '../src/components/TruncatedList';

const stories = storiesOf('Truncated List', module);
const singleItemList = ['Boromir'];
const list = ['Boromir', 'Elrond', 'Frodo', 'Gimli', 'Legolas'];
const limit = 2; // Default is 3
const objectList = [
  {name: "Boromir", dies: "Yep."},
  {name: "Elrond", dies: "Nah!"},
  {name: "Frodo", dies: "Nah!"},
  {name: "Gimli", dies: "Nah!"},
  {name: "Legolas", dies: "Nah!"}
];

stories.add('Inline - Limit 2', () => (
  <TruncatedInlineList
    items={list}
    limit={limit}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
  />
));

stories.add('Inline - Limit Default', () => (
  <TruncatedInlineList
    items={list}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
  />
));

stories.add('Inline - Only 1 Item', () => (
  <TruncatedInlineList
    items={singleItemList}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
  />
));

stories.add('HTML - Custom Renderers', () => (
  <TruncatedHTMLList
    items={objectList}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
    itemRenderer={(item: object) => (
      <div>
        <h1>{item["name"]}</h1>
        <p>Dies in the movies? {item["dies"]}</p>
      </div>
    )}
    moreRenderer={(truncatedCount: string, link: string) => (
      <div>
        <a href={link}>Plus {truncatedCount} more!</a>
      </div>
    )}
  />
));

