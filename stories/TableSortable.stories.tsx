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
  },
  {
    name: "Date",
    dataKey: "date",
  }
]

const columnWithSort = [
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

const RowRenderer = ({columns} : {columns: Array<object>}) => (
  <TableRow>
    <TableCell>
      <a href="#">{columns["name"]}</a>
    </TableCell>
    <TableCell>
      2/{columns["date"]}/2018
    </TableCell>
  </TableRow>
)

const ColumnRenderer = ({name, dataKey, onClick, sort, ascending, sortBy} : {name: any, dataKey: string, onClick: Function, sort?: Function, ascending?: boolean, sortBy: string}) => (
  <HeaderCell sortKey={dataKey} onClick={onClick} ascending={ascending} sorted={dataKey === sortBy}>
    <span className="sg-icon sg-icon-button"></span> {name}
  </HeaderCell>
)

stories.add('Sortable (Defaults)', () => (
  <SortableTable rowData={data} headerData={column}>
  </SortableTable>
));

stories.add('Sortable (Default Render, Custom Sort)', () => (
  <SortableTable rowData={data} headerData={columnWithSort}>
  </SortableTable>
));

stories.add('Sortable (Custom Render)', () => (
  <SortableTable rowRenderer={RowRenderer} rowData={data} headerData={columnWithSort} headerRenderer={ColumnRenderer}>
  </SortableTable>
));
