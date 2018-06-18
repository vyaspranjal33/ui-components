import React from 'react';
import { HeaderCell, Table, TableBody, TableCell, TableHeader, TableRow, } from './table';
export class SortableTable extends React.Component {
    constructor(props) {
        super(props);
        this.defaultSort = function (array, dataKey) {
            return array.sort(function (a, b) {
                const x = a[dataKey];
                const y = b[dataKey];
                return x < y ? -1 : x > y ? 1 : 0;
            });
        };
        this.state = {
            ascending: undefined,
            data: [],
            sortBy: undefined,
        };
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
        this.sortData = this.sortData.bind(this);
    }
    componentDidMount() {
        this.sortData(this.props.headerData[0].dataKey, false);
    }
    handleHeaderClick(dataKey, descending) {
        this.sortData(dataKey, descending);
    }
    sortData(sortBy, descending) {
        const data = this.performSort(this.props.rowData, this.props.headerData, sortBy);
        if (descending) {
            this.setState({ data: data.reverse(), ascending: false, sortBy });
        }
        else {
            this.setState({ data, ascending: true, sortBy });
        }
    }
    render() {
        const ascendingState = this.state.ascending;
        const sortByKey = this.state.sortBy;
        const defaultHeaderRenderer = ({ name, dataKey, onClick, sort, ascending, sortBy, }) => (React.createElement(HeaderCell, { sortKey: dataKey, onClick: onClick, ascending: ascendingState, sorted: dataKey === sortByKey }, name));
        const defaultRowRenderer = ({ columns }) => (React.createElement(TableRow, null, this.props.headerData.map((header) => (React.createElement(TableCell, { key: 'header-' + header.dataKey }, columns[header.dataKey])))));
        const HeaderRenderer = this.props.headerRenderer || defaultHeaderRenderer;
        const RowRenderer = this.props.rowRenderer || defaultRowRenderer;
        return (React.createElement(Table, null,
            React.createElement(TableHeader, null,
                React.createElement(TableRow, null, this.props.headerData.map((ele, index) => (React.createElement(HeaderRenderer, Object.assign({}, ele, { onClick: this.handleHeaderClick, sortBy: sortByKey, ascending: ascendingState, key: 'header-' + ele.dataKey })))))),
            React.createElement(TableBody, null, this.state.data.map((ele, index) => (React.createElement(RowRenderer, { key: 'row-' + index, columns: ele }))))));
    }
    performSort(rowData, headerData, sortBy) {
        const sortIndex = headerData.findIndex(ele => ele.dataKey === sortBy);
        let data = [];
        if (typeof headerData[sortIndex].sort === 'function') {
            data = headerData[sortIndex].sort(rowData, headerData[sortIndex].dataKey);
        }
        else {
            data = this.defaultSort(rowData, headerData[sortIndex].dataKey);
        }
        return data;
    }
}
export default SortableTable;
//# sourceMappingURL=sortable-table.js.map