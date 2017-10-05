import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Loader from '../src/components/Loader';

const loaderStories = storiesOf('Loaders', module);

loaderStories.add('Standard Loader', () => <Loader />);

loaderStories.add('Large Loader', () => <Loader large />);

loaderStories.add('Small Loader', () => <Loader small />);

loaderStories.add('Centered Loader', () => (
  <div style={{ height: '100vh' }}>
    <Loader centered />
  </div>
));

loaderStories.add('Loader on Dark', () => (
  <div style={{ backgroundColor: '#294661', height: '100vh' }}>
    <Loader onDark centered large />
  </div>
));
