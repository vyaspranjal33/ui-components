import { storiesOf } from '@storybook/react';
import React from 'react';

import Meter from '../src/meter';

const stories = storiesOf('Meter', module);

stories.add('Meter Above 50', () => <Meter value={95} title="Health" />);

stories.add('Meter Below 50', () => <Meter value={43} title="Mana" />);

stories.add('Meter Below 25', () => <Meter value={13} title="Stamina" />);
