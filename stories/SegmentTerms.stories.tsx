import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Alert from '../src/alert';
import Button from '../src/button';
import { Radio, RadioGroup } from '../src/radio';
import { SegmentTerm } from '../src/segment-term';

const stories = storiesOf('Segment Term', module);
const onAddButtonClick = action('add button click');
const onCancelClick = action('cancel click');
const onConfirmClick = action('confirm click');
const onEditClick = action('on edit click');

stories.add('Segment terms', () => (
  <div>
    <SegmentTerm
      title="Entry Criteria"
      hasSeparator
      label="The first time a contact is added to"
      queryName="People in Los Angeles"
      editable
      onEdit={onEditClick}
    />
    <SegmentTerm
      title="Or"
      label="Every time a contact is added to"
      queryName="People in Denver"
      editable
      hasAddButton
      onAddButtonClick={onAddButtonClick}
      onEdit={onEditClick}
    />
  </div>
));

stories.add('Segment term which cannot be edited', () => (
  <SegmentTerm
    title="Entry Criteria"
    label="The first time a contact is added to"
    queryName="People in Los Angeles"
    editable={false}
  />
));

stories.add('Segment term which is being edited', () => (
  <SegmentTerm
    title="Entry Criteria"
    hasAddButton
    hasSeparator
    editable
    editing
    onAddButtonClick={onAddButtonClick}
    onCancel={onCancelClick}
    onConfirm={onConfirmClick}
    renderInputs={() => (
      <>
        <div className="input-select-wrap">
          <label className="input-select-label" htmlFor="select-a">Select send conditions</label>
          <select id="select-a">
            <option>The first time a contact</option>
          </select>
        </div>
        <div className="input-select-wrap">
          <label className="input-select-label" htmlFor="select-b">Select contact criteria</label>
          <select id="select-b">
            <option>Abandons a cart</option>
          </select>
        </div>
      </>
    )}
  />
));

stories.add('Segment term which is being edited and is filled out', () => (
  <SegmentTerm
    title="Entry Criteria"
    hasAddButton
    hasSeparator
    editable
    editing
    showConfirm
    onAddButtonClick={onAddButtonClick}
    onCancel={onCancelClick}
    onConfirm={onConfirmClick}
    renderInputs={() => (
      <>
        <div className="input-select-wrap">
          <label className="input-select-label" htmlFor="select-a">Select send conditions</label>
          <select id="select-a">
            <option>The first time a contact</option>
          </select>
        </div>
        <div className="input-select-wrap">
          <label className="input-select-label" htmlFor="select-b">Select contact criteria</label>
          <select id="select-b">
            <option>Abandons a cart</option>
          </select>
        </div>
        <div className="input-select-wrap">
          <select id="select-c">
            <option>People in Los Angeles</option>
          </select>
        </div>
      </>
    )}
  />
));

stories.add('Segment term with alert', () => (
  <SegmentTerm
    title="Entry Criteria"
    hasSeparator
    label="The first time a contact is added to"
    queryName="People in Los Angeles"
    editable
    onEdit={onEditClick}
    renderAlert={() => (
      <Alert type="warning" dismissable={false}>
        Changes you've made to your entry criteria have not been applied to your live automation.
        <Button type="primary">Save and Apply</Button>
      </Alert>
    )}
  />
));

stories.add('Segment term with radio btns and alert', () => (
  <SegmentTerm
    title="Exit Criteria"
    editable
    editing
    radios
    renderInputs={() => (
      <RadioGroup name="example-grp" onChange={action('radio change')}>
        <Radio checked value="a" label="Option 1" />
        <Radio checked value="b" label="Option 2" />
      </RadioGroup>
    )}
    renderAlert={() => (
      <Alert type="warning" dismissable={false}>
        Changes you've made to your exit criteria have not been applied to your live automation.
        <Button type="primary">Save and Apply</Button>
      </Alert>
    )}
  />
));
