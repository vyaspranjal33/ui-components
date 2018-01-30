import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { ActionsCell, Action } from '../src/components/Actions';
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
        <ActionsCell>
          <Action title="View" icon="view" onClick={action('View Action Clicked')} />
          <Action title="Edit" icon="pencil" onClick={action('Edit Action Clicked')} />
          <Action title="Copy" icon="copy" onClick={action('Copy Action Clicked')} />
          <Action title="Delete" icon="trash" onClick={action('Delete Action Clicked')} />
        </ActionsCell>
      </Row>
    </TableBody>
  </Table>
));
