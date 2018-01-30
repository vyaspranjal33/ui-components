import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import {
  SegmentTerm,
  SegmentTermAddButton,
  SegmentTermControls,
  SegmentTermDescription,
  SegmentTermTitle,
  SegmentTermWrap,
} from '../src/components/SegmentTerm';

const stories = storiesOf('Segment Term', module);
const onClick = () => {};

stories.add('Segment terms', () => (
  <Fragment>
    <SegmentTermWrap>
      <SegmentTermTitle>
        Entry Criteria
      </SegmentTermTitle>
      <SegmentTerm hasSeparator>
        <SegmentTermDescription
          label="The first time a contact is added to"
          queryName="People in Los Angeles"
        />
        <SegmentTermControls isEditable />
      </SegmentTerm>
    </SegmentTermWrap>
    <SegmentTermWrap>
      <SegmentTermTitle>
        Or
      </SegmentTermTitle>
      <SegmentTerm>
        <SegmentTermDescription
          label="Every time a contact is added to"
          queryName="People in Denver"
        />
        <SegmentTermControls isEditable />
      </SegmentTerm>
      <SegmentTermAddButton onClick={onClick} />
    </SegmentTermWrap>
  </Fragment>
));

stories.add('Segment terms which cannot be edited', () => (
  <SegmentTermWrap>
    <SegmentTermTitle>
      Entry Criteria
    </SegmentTermTitle>
    <SegmentTerm>
      <SegmentTermDescription
        label="The first time a contact is added to"
        queryName="People in Los Angeles"
      />
    </SegmentTerm>
  </SegmentTermWrap>
));

stories.add('Segment terms which is being edited', () => (
  <SegmentTermWrap>
    <SegmentTermTitle>
      Entry Criteria
    </SegmentTermTitle>
    <SegmentTerm hasSeparator isEditing>
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
      <SegmentTermControls isEditing />
    </SegmentTerm>
    <SegmentTermAddButton onClick={onClick} />
  </SegmentTermWrap>
));

stories.add('Segment terms which is being edited and is filled out', () => (
  <SegmentTermWrap>
    <SegmentTermTitle>
      Entry Criteria
    </SegmentTermTitle>
    <SegmentTerm hasSeparator isEditing>
      <div className="input-select-wrap">
        <select id="select-a">
          <option>The first time a contact</option>
        </select>
      </div>
      <div className="input-select-wrap">
        <select id="select-b">
          <option>Abandons a cart</option>
        </select>
      </div>
      <div className="input-select-wrap">
        <select id="select-c">
          <option>People in Los Angeles</option>
        </select>
      </div>
      <SegmentTermControls isEditing showConfirm />
    </SegmentTerm>
    <SegmentTermAddButton onClick={onClick} />
  </SegmentTermWrap>
));
