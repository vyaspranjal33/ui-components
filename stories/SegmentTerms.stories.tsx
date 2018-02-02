import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { SegmentTerm } from '../src/components/SegmentTerm';

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
      isEditable
      onEdit={onEditClick}
    />
    <SegmentTerm
      title="Or"
      label="Every time a contact is added to"
      queryName="People in Denver"
      isEditable
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
    isEditable={false}
  />
));

stories.add('Segment term which is being edited', () => (
  <SegmentTerm
    title="Entry Criteria"
    hasAddButton
    hasSeparator
    isEditable
    isEditing
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
    isEditable
    isEditing
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
