import React from 'react';
import { storiesOf } from '@storybook/react';

import Module from '../src/module';

const stories = storiesOf('Drag & Drop Modules', module);

stories.add('All', () => (
  <div style={{ width: '400px' }}>
    <style dangerouslySetInnerHTML={{__html: `
      .is-module { 
        margin: 0 10px 10px 0;
        display: inline-flex;
      }
    `}}/>
    <Module type="button" />
    <Module type="code" />
    <Module type="columns" />
    <Module type="divider" />
    <Module type="image" />
    <Module type="image-text" />
    <Module type="social" />
    <Module type="spacer" />
    <Module type="text" />
    <Module type="unsubscribe" />
  </div>
));


stories.add('Button Module', () => (
  <Module type="button" />
));

stories.add('Code Module', () => (
  <Module type="code" />
));

stories.add('Columns Module', () => (
  <Module type="columns" />
));

stories.add('Divider Module', () => (
  <Module type="divider" />
));

stories.add('Image Module', () => (
  <Module type="image" />
));

stories.add('Image & Text Module', () => (
  <Module type="image-text" />
));

stories.add('Social Module', () => (
  <Module type="social" />
));

stories.add('Spacer Module', () => (
  <Module type="spacer" />
));

stories.add('Text Module', () => (
  <Module type="text" />
));

stories.add('Unsubscribe Module', () => (
  <Module type="unsubscribe" />
));
