import * as cn from 'classnames';
import * as React from 'react';
import Option from './Option';
export { Option };
export class Select extends React.Component {
    constructor(props) {
        super();
        this.state = {
            focus: false,
            open: false,
        };
        this.openMenu = this.openMenu.bind(this);
        this.removeFocus = this.removeFocus.bind(this);
    }
    openMenu() {
        this.setState({
            open: true,
        });
    }
    removeFocus() {
        this.setState({
            focus: false,
            open: false,
        });
    }
    render() {
        const { children, disabled, error, label, noEmptyOption, placeholder, required, } = this.props;
        const { open } = this.state;
        return (React.createElement("div", { className: cn('input-select-wrap', {
                'is-disabled': disabled,
                'is-error': error,
                'is-required': required,
            }) },
            React.createElement("label", { className: "input-select-label", htmlFor: "select2-example-required" }, label),
            React.createElement("select", { className: "input-select2 select2-hidden-accessible", id: "select2-example-required", "data-placeholder": placeholder, tabIndex: -1, "aria-hidden": "true" },
                !noEmptyOption && React.createElement(Option, null),
                children),
            React.createElement("span", { className: cn('select2', 'select2-container', 'select2-container--default', 'select2-container--below', {
                    'select2-container--open': open,
                }), dir: "ltr", style: { width: '100%' }, onClick: this.openMenu, onBlur: this.removeFocus },
                React.createElement("span", { className: "selection" },
                    React.createElement("span", { className: "select2-selection select2-selection--single", role: "combobox", "aria-haspopup": "true", "aria-expanded": "false", tabIndex: 0, "aria-labelledby": "select2-select2-example-required-container" },
                        React.createElement("span", { className: "select2-selection__rendered", id: "select2-select2-example-required-container" },
                            React.createElement("span", { className: "select2-selection__placeholder" }, placeholder)),
                        React.createElement("span", { className: "select2-selection__arrow", role: "presentation" },
                            React.createElement("b", { role: "presentation" })))),
                React.createElement("span", { className: "dropdown-wrapper", "aria-hidden": "true" }))));
    }
}
export default Select;
//# sourceMappingURL=index.js.map