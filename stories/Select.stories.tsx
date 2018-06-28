import React from 'react';
import Select, { components } from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable';
import { storiesOf } from '@storybook/react';
import './select.module.scss';

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
  <div className="input-select-wrap">
    <Select
      className="input-select"
      defaultValue={feels[1]}
      name="single"
      options={feels}
    />
  </div>
));

stories.add('With placeholder', () => (
  <div className="input-select-wrap">
    <Select className="input-select" options={feels} placeholder="Goobers" />
  </div>
));

stories.add('With label', () => (
  <div className="input-select-wrap">
    <label className="input-select-label">Powerups</label>
    <Select className="input-select" options={powerups} />
  </div>
));

stories.add('With info', () => (
  <div className="input-select-wrap">
    <Select className="input-select" options={powerups} />
    <span className="input-info">
      Read this to better understand the dropdown.
    </span>
  </div>
));

stories.add('Disabled', () => (
  <div className="input-select-wrap is-disabled">
    <Select
      className="input-select"
      defaultValue={feels[7]}
      isDisabled
      options={feels}
    />
  </div>
));

stories.add('Searchable', () => (
  <div className="input-select-wrap">
    <Select
      className="input-select"
      defaultValue={feels[1]}
      isSearchable
      options={feels}
    />
  </div>
));

stories.add('Multi select', () => (
  <div className="input-select-wrap">
    <Select
      className="input-select"
      defaultValue={[powerups[0], powerups[1]]}
      isSearchable
      options={powerups}
    />
  </div>
));

stories.add('Tagging', () => (
  <div className="input-select-wrap">
    <CreatableSelect className="input-select" isMulti options={powerups} />
  </div>
));

stories.add('Option groups', () => (
  <div className="input-select-wrap">
    <Select
      className="input-select"
      name="groups"
      placeholder="Feels vs. Powerups"
      options={[
        { label: 'Feels', options: feels },
        { label: 'Powerups', options: powerups },
      ]}
    />
  </div>
));

// This is just to illustrate 2 diff ways to add custom styles.
// the styles={customStyles} way is strongly preferred.
stories.add('Custom classnames and styles', () => {
  const Control = (props: any) => (
    <div className="my-control-wrapper">
      <p>My amazing select!</p>
      <components.Control {...props} />
    </div>
  );

  // this is the preferred way to style react-select
  const customStyles = {
    option: (base: any) => ({
      ...base,
      borderBottom: '1px dotted pink',
      cursor: 'pointer',
    }),
  };

  return (
    <div>
      {/* i know this looks weird, but this is just to illustrate styling by classnames */}
      <style>
        {`
        .my-control-wrapper {
          background: #927;
          color: #eee;
          padding: 1em;
        }
      `}
      </style>
      <Select
        components={{ Control }}
        options={powerups}
        styles={customStyles}
      />
    </div>
  );
});
