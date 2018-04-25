var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { HeaderCell, Table, TableBody, TableCell, TableHeader, TableRow } from './table';
var SortableTable = /** @class */ (function (_super) {
    __extends(SortableTable, _super);
    function SortableTable(props) {
        var _this = _super.call(this, props) || this;
        _this.defaultSort = function (array, dataKey) {
            return array.sort(function (a, b) {
                var x = a[dataKey];
                var y = b[dataKey];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        };
        _this.state = {
            ascending: undefined,
            data: [],
            sortBy: undefined,
        };
        _this.handleHeaderClick = _this.handleHeaderClick.bind(_this);
        _this.sortData = _this.sortData.bind(_this);
        return _this;
    }
    SortableTable.prototype.componentDidMount = function () {
        this.sortData(this.props.headerData[0].dataKey, false);
    };
    SortableTable.prototype.handleHeaderClick = function (dataKey, descending) {
        this.sortData(dataKey, descending);
    };
    SortableTable.prototype.sortData = function (sortBy, descending) {
        var data = this.performSort(this.props.rowData, this.props.headerData, sortBy);
        if (descending) {
            this.setState({ data: data.reverse(), ascending: false, sortBy: sortBy });
        }
        else {
            this.setState({ data: data, ascending: true, sortBy: sortBy });
        }
    };
    SortableTable.prototype.render = function () {
        var _this = this;
        var ascendingState = this.state.ascending;
        var sortByKey = this.state.sortBy;
        var defaultHeaderRenderer = function (_a) {
            var name = _a.name, dataKey = _a.dataKey, onClick = _a.onClick, sort = _a.sort, ascending = _a.ascending, sortBy = _a.sortBy;
            return (React.createElement(HeaderCell, { sortKey: dataKey, onClick: onClick, ascending: ascendingState, sorted: dataKey === sortByKey }, name));
        };
        var defaultRowRenderer = function (_a) {
            var columns = _a.columns;
            return (React.createElement(TableRow, null, _this.props.headerData.map(function (header) {
                return React.createElement(TableCell, { key: 'header-' + header.dataKey }, columns[header.dataKey]);
            })));
        };
        var HeaderRenderer = this.props.headerRenderer || defaultHeaderRenderer;
        var RowRenderer = this.props.rowRenderer || defaultRowRenderer;
        return (React.createElement(Table, null,
            React.createElement(TableHeader, null,
                React.createElement(TableRow, null, this.props.headerData.map(function (ele, index) {
                    return React.createElement(HeaderRenderer, __assign({}, ele, { onClick: _this.handleHeaderClick, sortBy: sortByKey, ascending: ascendingState, key: 'header-' + ele.dataKey }));
                }))),
            React.createElement(TableBody, null, this.state.data.map(function (ele, index) { return React.createElement(RowRenderer, { key: 'row-' + index, columns: ele }); }))));
    };
    SortableTable.prototype.performSort = function (rowData, headerData, sortBy) {
        var sortIndex = headerData.findIndex(function (ele) { return ele.dataKey === sortBy; });
        var data = [];
        if (typeof headerData[sortIndex].sort === 'function') {
            data = headerData[sortIndex].sort(rowData, headerData[sortIndex].dataKey);
        }
        else {
            data = this.defaultSort(rowData, headerData[sortIndex].dataKey);
        }
        return data;
    };
    return SortableTable;
}(React.Component));
export { SortableTable };
export default SortableTable;
//# sourceMappingURL=sortable-table.js.map