import { storiesOf } from '@storybook/react';
import React from 'react';

import { Breadcrumb } from '../src/components/Breadcrumb';

const stories = storiesOf('Breadcrumb', module);

stories.add('Breadcrumb with single item', () => (
  <Breadcrumb>
    <a href="#">Contacts</a>
  </Breadcrumb>
));

stories.add('Breadcrumb with two items', () => (
  <Breadcrumb>
    <a href="#">Contacts</a>
    <a href="#">Upload CSV</a>
  </Breadcrumb>
));

stories.add('Breadcrumb without trailing slash', () => (
  <Breadcrumb withoutTrailingSlash>
    <a href="#">Contacts</a>
  </Breadcrumb>
));
