import { storiesOf } from '@storybook/react';
import React from 'react';

import Table from '../src/components/Table';

const stories = storiesOf('Table', module);

stories.add('Standard', () => 
	<Table>
    <thead>
      <tr>
        <th>Contacts</th>
        <th>Date Added</th>
        <th>Last Opened</th>
        <th>Last Clicked</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="contact"><a href="#">todd.moy@sendgrid.com</a></td>
        <td className="stats">02/02/2015</td>
        <td className="stats">02/10/2016</td>
        <td className="stats">02/08/2016</td>
        <td className="actions">
          <i className="sg-icon sg-icon-ellipsis"></i>
          <div className="action-icons">
            <span data-tooltip="View" data-tooltip-pos="up"><i className="sg-icon sg-icon-view"></i></span>
            <span data-tooltip="Edit" data-tooltip-pos="up"><i className="sg-icon sg-icon-pencil"></i></span>
            <span data-tooltip="Copy" data-tooltip-pos="up"><i className="sg-icon sg-icon-copy"></i></span>
            <span data-tooltip="Delete" data-tooltip-pos="up"><i className="sg-icon sg-icon-trash"></i></span>
          </div>
        </td>
      </tr>
    </tbody>
  </Table>
);