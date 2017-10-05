import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Badge from '../src/components/Badge';

import colors from '../src/utilities/colors';

const stories = storiesOf('Badge', module);

for (const color of colors) {
  stories.add(color, () => <Badge color={color}>{color}</Badge>);
}
