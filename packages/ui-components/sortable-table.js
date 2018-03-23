(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.SortableTable = {}),global.React));
}(this, (function (exports,React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function classNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = '';
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (!arg) {
            continue;
        }
        if (typeof arg === 'string' || typeof arg === 'number') {
            result = result + " " + arg;
            continue;
        }
        if (Array.isArray(arg)) {
            result = result + " " + classNames.apply(void 0, arg);
            continue;
        }
        if (typeof arg === 'object') {
            var keys = Object.keys(arg);
            for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
                var key = keys_1[_b];
                if (arg[key]) {
                    result = result + " " + key;
                }
            }
        }
    }
    return result.trim();
}

var TableBody = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("tbody", { className: className }, children));
};

var TableCell = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("td", { className: className }, children));
};

var TableHeader = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("thead", { className: className }, children));
};

var HeaderCell = /** @class */ (function (_super) {
    __extends(HeaderCell, _super);
    function HeaderCell(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            if (_this.props.sortKey) {
                if (_this.props.ascending === false) {
                    _this.props.onClick(_this.props.sortKey, false);
                }
                else {
                    _this.props.onClick(_this.props.sortKey, true);
                }
            }
        };
        return _this;
    }
    HeaderCell.prototype.render = function () {
        return (React.createElement("th", { className: classNames(this.props.className, { sort: !(this.props.sortKey === undefined) }, { 'sort-asc': this.props.sorted && this.props.ascending === true }, { 'sort-desc': this.props.sorted && this.props.ascending === false }), onClick: this.handleClick }, this.props.children));
    };
    return HeaderCell;
}(React.Component));

var TableRow = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("tr", { className: className }, children));
};

var Table = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("table", { className: classNames('table-wrap', className) }, children));
};

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

exports.default = SortableTable;
exports.SortableTable = SortableTable;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sortable-table.js.map
