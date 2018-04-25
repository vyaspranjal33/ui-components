import { storiesOf } from '@storybook/react';
import React from 'react';

import { Progress, ProgressStage } from '../src/progress';

const stories = storiesOf('Progress', module);

stories.add('Horizontal Progress', () => (
  <Progress>
    <ProgressStage done>Step One</ProgressStage>
    <ProgressStage selected>Step Two</ProgressStage>
    <ProgressStage>Step Three</ProgressStage>
  </Progress>
));

stories.add('Vertical Progress', () => (
  <Progress vertical>
    <ProgressStage done>Step One</ProgressStage>
    <ProgressStage selected>Step Two</ProgressStage>
    <ProgressStage>Step Three</ProgressStage>
  </Progress>
));
