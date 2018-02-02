import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Action, ActionsCell } from '../src/components/Actions';
import { HeaderCell, Table, TableBody, TableCell, TableHeader, TableRow } from '../src/components/Table/Table';

const stories = storiesOf('Table', module);

stories.add('Standard', () => (
  <Table>
    <TableHeader>
      <TableRow>
        <HeaderCell>Contacts</HeaderCell>
        <HeaderCell sortable>Date Added</HeaderCell>
        <HeaderCell>Last Opened</HeaderCell>
        <HeaderCell>Last Clicked</HeaderCell>
        <HeaderCell>Actions</HeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="contact"><a href="#">todd.moy@sendgrid.com</a></TableCell>
        <TableCell className="stats">02/02/2015</TableCell>
        <TableCell className="stats">02/10/2016</TableCell>
        <TableCell className="stats">02/08/2016</TableCell>
        <ActionsCell>
          <Action title="View" icon="view" onClick={action('View Action Clicked')} />
          <Action title="Edit" icon="pencil" onClick={action('Edit Action Clicked')} />
          <Action title="Copy" icon="copy" onClick={action('Copy Action Clicked')} />
          <Action title="Delete" icon="trash" onClick={action('Delete Action Clicked')} />
        </ActionsCell>
      </TableRow>
      <TableRow>
        <TableCell className="contact"><a href="#">eric.tjossem@sendgrid.com</a></TableCell>
        <TableCell className="stats">03/03/2015</TableCell>
        <TableCell className="stats">04/10/2016</TableCell>
        <TableCell className="stats">04/08/2016</TableCell>
        <ActionsCell>
          <Action title="View" icon="view" onClick={action('View Action Clicked')} />
          <Action title="Edit" icon="pencil" onClick={action('Edit Action Clicked')} />
          <Action title="Copy" icon="copy" onClick={action('Copy Action Clicked')} />
          <Action title="Delete" icon="trash" onClick={action('Delete Action Clicked')} />
        </ActionsCell>
      </TableRow>
      <TableRow>
        <TableCell className="contact"><a href="#">alex.thomsen@sendgrid.com</a></TableCell>
        <TableCell className="stats">05/02/2015</TableCell>
        <TableCell className="stats">06/10/2016</TableCell>
        <TableCell className="stats">07/08/2016</TableCell>
        <ActionsCell>
          <Action title="View" icon="view" onClick={action('View Action Clicked')} />
          <Action title="Edit" icon="pencil" onClick={action('Edit Action Clicked')} />
          <Action title="Copy" icon="copy" onClick={action('Copy Action Clicked')} />
          <Action title="Delete" icon="trash" onClick={action('Delete Action Clicked')} />
        </ActionsCell>
      </TableRow>
    </TableBody>
  </Table>
));
