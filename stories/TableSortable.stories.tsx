import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { HeaderCell, Table, TableBody, TableCell, TableHeader, TableRow } from '../src/components/Table/Table';
import SortableTable from '../src/components/Table/SortableTable';

const stories = storiesOf('Table', module);

const data = [
  {
    name: "Awesome Wednesday",
    date: 7
  },
  {
    name: "Beautiful Thursday",
    date: 8
  },
  {
    name: "Celebratory Tuesday",
    date: 6
  },
  {
    name: "Delightful Friday",
    date: 9
  },
  {
    name: "Excellent Monday",
    date: 5
  }
]

const column = [
  {
    name: "Name",
    dataKey: "name",
    sort: function(array: Array<any>, dataKey: string) {
      return array.sort(function(a, b) {
        var x = a[dataKey]; var y = b[dataKey];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      })
    }
  },
  {
    name: "Date",
    dataKey: "date",
    sort: function(array: Array<any>, dataKey: string) {
      return array.sort(function(a, b) {
        var x = a[dataKey]; var y = b[dataKey];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      })
    }
  }
]

const RowRenderer = ({name, date} : {name: string, date: number}) => (
  <TableRow>
    <TableCell>
      {name}
    </TableCell>
    <TableCell>
      {date}
    </TableCell>
  </TableRow>
)

const ColumnRenderer = ({name, sort, dataKey, clickEvent} : {name: string, dataKey: string, sort: Function, clickEvent: Function}) => (
  <HeaderCell sortKey={dataKey} clickEvent={clickEvent}>
    {name}
  </HeaderCell>
)

stories.add('Sortable', () => (
  <SortableTable rowRenderer={RowRenderer} rowData={data} headerData={column} headerRenderer={ColumnRenderer}>
  </SortableTable>
));
