import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { DropdownButton } from '../src/components/DropdownButton';

const stories = storiesOf('Dropdown Button', module);

stories.add('Primary Dropdown', () => (
  <DropdownButton label="Button" type="primary">
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Secondary Dropdown', () => (
  <DropdownButton label="Button" type="secondary">
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Primary Dropdown with Icon', () => (
  <DropdownButton label="Button" type="primary" icon="create">
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Secondary Dropdown with Icon', () => (
  <DropdownButton label="Button" type="secondary" icon="create">
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Primary Dropdown with Badge', () => (
  <DropdownButton label="Button" type="primary" badge={1}>
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Secondary Dropdown with Badge', () => (
  <DropdownButton label="Button" type="secondary" badge={2}>
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Primary Dropdown (Small)', () => (
  <DropdownButton label="Button" type="primary" small>
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Secondary Dropdown (Small)', () => (
  <DropdownButton label="Button" type="secondary" small>
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Primary Dropdown with Icon (Small)', () => (
  <DropdownButton label="Button" type="primary" icon="create" small>
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Secondary Dropdown with Icon (Small)', () => (
  <DropdownButton label="Button" type="secondary" icon="create" small>
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Primary Dropdown with Badge (Small)', () => (
  <DropdownButton label="Button" type="primary" badge={1} small>
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Secondary Dropdown with Badge (Small)', () => (
  <DropdownButton label="Button" type="secondary" badge={2} small>
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));

stories.add('Gear Dropdown', () => (
  <DropdownButton gear>
    <a href="#">Add new Sender</a>
    <a href="#">Add new IP</a>
    <a href="#">Add new Template</a>
  </DropdownButton>
));
