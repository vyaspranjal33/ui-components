import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { StatefulSlider as Slider } from '../src/components/Slider';

const stories = storiesOf('Slider', module);

stories.add('Slider with Label', () => (
  <Slider value={40} onChange={action('Slider Changed')} />
));

stories.add('Slider without Label', () => (
  <Slider value={40} onChange={action('Slider Changed')} label={false} />
));
