import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import {
  SegmentTerm,
  SegmentTermControls,
  SegmentTermDescription,
  SegmentTermTitle,
  SegmentTermWrap,
} from '../src/components/SegmentTerm';

const stories = storiesOf('Segment Term', module);

stories.add('Segment terms', () => (
  <Fragment>
    <SegmentTermWrap>
      <SegmentTermTitle label="Entry Criteria" secondaryLabel="=" />
      <SegmentTerm hasSeparator>
        <SegmentTermDescription
          label="The first time a contact is added to"
          queryName="People in Los Angeles"
        />
        <SegmentTermControls isEditable />
      </SegmentTerm>
    </SegmentTermWrap>
    <SegmentTermWrap>
      <SegmentTermTitle label="Or" justify="right" />
      <SegmentTerm>
        <SegmentTermDescription
          label="Every time a contact is added to"
          queryName="People in Denver"
        />
        <SegmentTermControls isEditable />
      </SegmentTerm>
    </SegmentTermWrap>
  </Fragment>
));

stories.add('Segment terms which cannot be edited', () => (
  <SegmentTermWrap>
    <SegmentTermTitle label="Entry Criteria" secondaryLabel="=" />
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
    <SegmentTermTitle label="Entry Criteria" secondaryLabel="=" />
    <SegmentTerm isEditing>
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
  </SegmentTermWrap>
));

stories.add('Segment terms which is being edited and is filled out', () => (
  <SegmentTermWrap>
    <SegmentTermTitle label="Entry Criteria" secondaryLabel="=" />
    <SegmentTerm isEditing>
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
  </SegmentTermWrap>
));
