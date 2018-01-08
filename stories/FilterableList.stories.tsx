/* tslint:disable:jsx-no-lamda */

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import values from 'lodash/values';
import React from 'react';

import FilterableList from '../src/components/FilterableList';
import { TextInput } from '../src/components/TextInput';

const stories = storiesOf('FilterableList', module);

const noop = action('Filter Input Changed');

interface Item { name: string; type: string; }

const mockItems: Item[] = [
  { name: 'Orange', type: 'Fruit' },
  { name: 'Apples', type: 'Fruit' },
  { name: 'Tomato', type: 'Vegetable' },
  { name: 'Cucumber', type: 'Vegetable' },
];

const Item = ({ name, type }: { name: string; type: string }) => (
  <article
    style={{
      border: '1px solid #e9ecef',
      margin: '10px 0',
      padding: '20px',
      width: '100%',
    }}
  >
    {name} ({type})
  </article>
);

stories.add('FilterableList', () => (
  <FilterableList
    title="Filter"
    items={mockItems}
    renderControls={({ value, handleFilterChange }) => {
      return (
        <TextInput
          type="text"
          fullWidth
          label="Name"
          id="name-filter"
          value={value as string}
          onChange={handleFilterChange}
        />
      );
    }}
    renderItems={(items: any[]) => (
      <>{items.map((item) => <Item key={item.title} {...item} />)}</>
    )}
  />
));

stories.add('FilterableList with Clear Button', () => (
  <FilterableList
    title="Filter"
    items={mockItems}
    showClearButton
    renderControls={({ value, handleFilterChange }) => {
      return (
        <TextInput
          type="text"
          fullWidth
          label="Name"
          id="name-filter"
          value={value as string}
          onChange={handleFilterChange}
        />
      );
    }}
    renderItems={(items: any[]) => (
      <>{items.map((item) => <Item key={item.title} {...item} />)}</>
    )}
  />
));

stories.add('FilterableList with Two Input Fields and Custom Filtering Logic', () => (
  <FilterableList
    title="Filter"
    items={mockItems}
    showClearButton
    filterOn={['name', 'type']}
    onFilter={(items, filters: { [key: string]: string }) => {
      const { name, type } = filters;
      return items.filter((item) => {
        if (!item.name.toLowerCase().includes(name.toLowerCase())) { return false; }
        if (!item.type.toLowerCase().includes(type.toLowerCase())) { return false; }
        return true;
      });
    }}
    renderControls={({ name, type, handleFilterNameChange, handleFilterTypeChange }) => {
      return (
        <>
          <TextInput
            type="text"
            fullWidth
            label="Name"
            id="name-filter"
            value={name}
            onChange={handleFilterNameChange}
          />
          <TextInput
            type="text"
            fullWidth
            label="Type"
            id="type-filter"
            value={type}
            onChange={handleFilterTypeChange}
          />
        </>
      );
    }}
    renderItems={(items: any[]) => (
      <>{items.map((item) => <Item key={item.title} {...item} />)}</>
    )}
  />
));

stories.add('FilterableList with Clear Button in Header', () => (
  <FilterableList
    title="Filter"
    showClearButton
    items={mockItems}
    clearButtonInHeader
    renderControls={({ value, handleFilterChange }) => {
      return (
        <TextInput
          type="text"
          fullWidth
          label="Name"
          id="name-filter"
          value={value as string}
          onChange={handleFilterChange}
        />
      );
    }}
    renderItems={(items: any[]) => (
      <>{items.map((item) => <Item key={item.title} {...item} />)}</>
    )}
  />
));
