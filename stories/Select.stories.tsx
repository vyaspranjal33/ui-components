import React from 'react';
import Select, { components } from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable'
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Select', module);

const feels = [
  { label: 'Double plus ungood', value: 'dbl_plus-un' },
  { label: 'Good', value: 'sys_good_01' },
  { label: 'Great', value: 'sys_great_id' },
  { label: 'Grand', value: 'grand' },
  { label: 'Fantastic', value: 'fantastic' },
  { label: 'Superb', value: 'superb' },
  { label: 'Stupendous', value: 'stupendous' },
  { label: 'Extraordinary', value: 'plvs_extra' },
];

const powerups = [
  { label: 'Mushroom', value: 'mushroom' },
  { label: 'Fire flower', value: 'fire-flower' },
  { label: 'Star', value: 'star' },
  { label: 'Feather', value: 'feather' },
  { label: 'Frog', value: 'frog' },
  { label: 'Tanooki', value: 'tanooki' },
  { label: '1-up', value: '1up' },
];

stories.add('Standard', () => (
  <Select
    defaultValue={feels[1]}
    isClearable
    name="single"
    options={feels}
  />
));

stories.add('With placeholder', () => (
  <Select
    isClearable
    placeholder="Goobers"
    options={feels}
  />
));

stories.add('With label', () => (
  <div>
    <small>Powerups</small>
    <Select options={powerups} />
  </div>
));

stories.add('With info', () => (
  <div>
    <Select options={powerups} />
    <small>Read this to better understand the dropdown.</small>
  </div>
));

stories.add('Disabled', () => (
  <Select
    defaultValue={feels[7]}
    isClearable
    isDisabled
    options={feels}
  />
));

stories.add('Searchable', () => (
  <Select
    defaultValue={feels[1]}
    isClearable
    isSearchable
    options={feels}
  />
));

stories.add('Multi select', () => (
  <Select
    defaultValue={[powerups[0], powerups[1]]}
    isClearable
    isSearchable
    className="whatever"
    id="qa-hook"
    options={powerups}
  />
));

stories.add('Tagging', () => (
  <CreatableSelect
    isMulti
    options={powerups}
  />
));

stories.add('Option groups', () => (
  <Select
    name="groups"
    placeholder="Feels vs. Powerups"
    options={[
      { label: 'Feels', options: feels },
      { label: 'Powerups', options: powerups },
    ]}
  />
));
