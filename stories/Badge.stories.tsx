import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Badge from '../src/badge';

import colors from '../src/utilities/colors';

const stories = storiesOf('Badge', module);

for (const color of colors) {
  stories.add(color, () => <Badge color={color}>{color}</Badge>);
}