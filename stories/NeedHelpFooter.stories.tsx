import { storiesOf } from '@storybook/react';
import * as React from 'react';

import NeedHelpFooter from '../src/components/NeedHelpFooter';

const stories = storiesOf('Need Help Footer', module);

stories.add('Need Help Footer Simple', () => (
  <NeedHelpFooter>
    Get more info on adding and updating contacts.
  </NeedHelpFooter>
));

stories.add('Need Help Footer with Link', () => (
  <NeedHelpFooter>
    <a href='#'>
      Get more info
    </a>{ ' ' }
    on adding and updating contacts.
  </NeedHelpFooter>
));
