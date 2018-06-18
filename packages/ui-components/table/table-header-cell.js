import React from 'react';
import cn from '../utilities/classnames';
export class HeaderCell extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            if (this.props.sortKey) {
                if (this.props.ascending === false) {
                    this.props.onClick(this.props.sortKey, false);
                }
                else {
                    this.props.onClick(this.props.sortKey, true);
                }
            }
        };
    }
    render() {
        return (React.createElement("th", { className: cn(this.props.className, { sort: !(this.props.sortKey === undefined) }, { 'sort-asc': this.props.sorted && this.props.ascending === true }, { 'sort-desc': this.props.sorted && this.props.ascending === false }), onClick: this.handleClick }, this.props.children));
    }
}
export default HeaderCell;
//# sourceMappingURL=table-header-cell.js.map