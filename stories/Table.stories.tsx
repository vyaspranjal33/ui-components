import { storiesOf } from '@storybook/react';
import React from 'react';

import Actions from '../src/components/Actions';
import { Cell, HeaderCell, Row, Table, TableBody, TableHeader } from '../src/components/Table';

const stories = storiesOf('Table', module);

stories.add('Standard', () => (
  <Table>
    <TableHeader>
      <Row>
        <HeaderCell>Contacts</HeaderCell>
        <HeaderCell>Date Added</HeaderCell>
        <HeaderCell>Last Opened</HeaderCell>
        <HeaderCell>Last Clicked</HeaderCell>
        <HeaderCell>Actions</HeaderCell>
      </Row>
    </TableHeader>
    <TableBody>
      <Row>
        <Cell className="contact"><a href="#">todd.moy@sendgrid.com</a></Cell>
        <Cell className="stats">02/02/2015</Cell>
        <Cell className="stats">02/10/2016</Cell>
        <Cell className="stats">02/08/2016</Cell>
        <Cell>
          <Actions>
            <span data-tooltip="View" data-tooltip-pos="up"><i className="sg-icon sg-icon-view" /></span>
            <span data-tooltip="Edit" data-tooltip-pos="up"><i className="sg-icon sg-icon-pencil" /></span>
            <span data-tooltip="Copy" data-tooltip-pos="up"><i className="sg-icon sg-icon-copy" /></span>
            <span data-tooltip="Delete" data-tooltip-pos="up"><i className="sg-icon sg-icon-trash" /></span>
          </Actions>
        </Cell>
      </Row>
    </TableBody>
  </Table>
));
