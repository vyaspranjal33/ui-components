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
import React from 'react';
import cn from '../utilities/classnames';
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
        return (React.createElement("th", { className: cn(this.props.className, { sort: !(this.props.sortKey === undefined) }, { 'sort-asc': this.props.sorted && this.props.ascending === true }, { 'sort-desc': this.props.sorted && this.props.ascending === false }), onClick: this.handleClick }, this.props.children));
    };
    return HeaderCell;
}(React.Component));
export { HeaderCell };
export default HeaderCell;
//# sourceMappingURL=table-header-cell.js.map