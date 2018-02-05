import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { HeaderCell, Table, TableBody, TableCell, TableHeader, TableRow } from '../src/components/Table/Table';
import SortableTable from '../src/components/Table/SortableTable';

const stories = storiesOf('Table', module);

const data = [
  {
    name: "Monday",
    date: 5
  },
  {
    name: "Tuesday",
    date: 6
  },
  {
    name: "Wednesday",
    date: 7
  },
  {
    name: "Thursday",
    date: 8
  },
  {
    name: "Friday",
    date: 9
  }
]

const column = [
  {
    name: "Name",
    sorter: function(arr: Array<any>) {
      return arr.sort();
    }
  },
  {
    name: "Date",
    sorter: function(arr: Array<any>) {
      return arr.sort();
    }
  }
]

const RowRenderer = ({name, date} : {name: string, date: number}) => (
  <TableRow key={name}>
    <TableCell>
      {name}
    </TableCell>
    <TableCell>
      {date}
    </TableCell>
  </TableRow>
)

const ColumnRenderer = ({name, sorter} : {name: string, sorter: Function}) => (
  <HeaderCell key={name} sortable>
    {name}
  </HeaderCell>
)

stories.add('Sortable', () => (
  <SortableTable rowRenderer={RowRenderer} rowData={data} headerData={column} headerRenderer={ColumnRenderer}>
  </SortableTable>
));
