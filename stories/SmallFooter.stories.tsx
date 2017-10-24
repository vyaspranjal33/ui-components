import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Footer, { NeedHelpFooter } from '../src/components/SmallFooter';

const stories = storiesOf('Need Help Footer', module);

stories.add('Footer Simple', () => (
  <Footer icon='help' header='What the what?'>
    This component is just fantastic.
  </Footer>
));

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
