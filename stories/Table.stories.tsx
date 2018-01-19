import { storiesOf } from '@storybook/react';
import React from 'react';

import { Table, Row, Cell } from '../src/components/Table';

const stories = storiesOf('Table', module);

stories.add('Standard', () => 
	<Table>
    <thead>
      <Row>
        <th>Contacts</th>
        <th>Date Added</th>
        <th>Last Opened</th>
        <th>Last Clicked</th>
        <th>Actions</th>
      </Row>
    </thead>
    <tbody>
      <Row>
        <Cell><div className="contact"><a href="#">todd.moy@sendgrid.com</a></div></Cell>
        <Cell><div className="stats">02/02/2015</div></Cell>
        <Cell><div className="stats">02/10/2016</div></Cell>
        <Cell><div className="stats">02/08/2016</div></Cell>
        <Cell>
          <div className="actions">
            <i className="sg-icon sg-icon-ellipsis"></i>
            <div className="action-icons">
              <span data-tooltip="View" data-tooltip-pos="up"><i className="sg-icon sg-icon-view"></i></span>
              <span data-tooltip="Edit" data-tooltip-pos="up"><i className="sg-icon sg-icon-pencil"></i></span>
              <span data-tooltip="Copy" data-tooltip-pos="up"><i className="sg-icon sg-icon-copy"></i></span>
              <span data-tooltip="Delete" data-tooltip-pos="up"><i className="sg-icon sg-icon-trash"></i></span>
            </div>
          </div>
        </Cell>
      </Row>
    </tbody>
  </Table>
);