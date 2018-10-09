import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import BannerMessage from './index';

const stories = storiesOf('Banner Message', module);

stories.add('Banner Messages', () => (
  <Fragment>
    <BannerMessage type="info">
      Hello, this is an info banner Message
    </BannerMessage>
    <br />
    <br />
    <BannerMessage type="beta">
      Beta banner with <strong>some jsx</strong>
    </BannerMessage>
  </Fragment>
));
