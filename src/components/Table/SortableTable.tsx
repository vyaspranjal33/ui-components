import React from 'react';
import cn from '../../utilities/classnames';
import { Table, TableCell, TableRow, TableHeader, TableBody, HeaderCell } from './Table';

export interface SortableTableProps {
  children?: React.ReactNode;
  className?: string;
  rowData?: Array<object>;
  rowRenderer?: React.SFC<any>;
  headerData?: Array<HeaderData>;
  headerRenderer?: React.SFC<any>;
}

interface HeaderData {
  name: string,
  sorter?: Function,
}

export default class SortableTable extends React.Component<SortableTableProps> {
  constructor(props: SortableTableProps) {
    super(props);
  }

  public render() {
    const {headerRenderer:HeaderRenderer} = this.props;
    const {rowRenderer:RowRenderer} = this.props;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            {this.props.headerData.map(ele => <HeaderRenderer {...ele} />)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.rowData.map(ele => <RowRenderer {...ele} />)}
        </TableBody>
      </Table>
    );
  }
}
