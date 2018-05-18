import React from 'react';
import { storiesOf } from '@storybook/react';

import SplitCard from '../src/split-card';

const stories = storiesOf('Split Card', module);

stories.add('Split Card', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <SplitCard title="Split Card" body="Line of copy.">
        <p>Section 1</p>
        <hr className="has-label" data-label="or"/>
        <p>Section 2</p>
      </SplitCard>
    </div>
  </div>
));