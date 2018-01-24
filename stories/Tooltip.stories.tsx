import { storiesOf } from '@storybook/react';
import React from 'react';

import { Tooltip, HTMLTooltip } from '../src/components/Tooltip';

const stories = storiesOf('Tooltip', module);

stories.add('Standard (Up)', () => 
	<h3>
    Tooltip Up
    <Tooltip content="Hello." direction="up"><i className="sg-icon sg-icon-info-circle"></i></Tooltip>
  </h3>
);

stories.add('Standard (Down)', () => 
  <h3>
    Tooltip Down
    <Tooltip content="Hello." direction="down"><i className="sg-icon sg-icon-info-circle"></i></Tooltip>
  </h3>
);

stories.add('Standard (Left)', () => 
  <h3>
    Tooltip Left
    <Tooltip content="Hello." direction="left"><i className="sg-icon sg-icon-info-circle"></i></Tooltip>
  </h3>
);

stories.add('Standard (Right)', () => 
  <h3>
    Tooltip Right
    <Tooltip content="Hello." direction="right"><i className="sg-icon sg-icon-info-circle"></i></Tooltip>
  </h3>
);

stories.add('Underline', () => 
  <Tooltip content="That means automatic teller machine." direction="right" className="has-underline"><span>ATM</span></Tooltip>
);

stories.add('HTML Content', () => 
  <div className="input-text-wrap">
    <label className="input-text-label">CCV</label>
    <input type="text" id="input-text-example-ccv" />
    <div className="input-info-tooltip">
      <HTMLTooltip  
        parent="<i class='sg-icon sg-icon-info-circle input-info-icon'></i>"
        isLeft
      >
        <p>The <a href="#">CCV number</a> is a 3 or 4 digit security code printed on the front or back of your card.</p>
      </HTMLTooltip>
    </div>
  </div>
);
