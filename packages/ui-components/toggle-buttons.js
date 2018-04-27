import React from 'react';
import findActiveIndex from './utilities/find-active-index';
const { map } = React.Children;
export const ToggleButtons = ({ children, onChange, }) => {
    return (React.createElement("div", { className: "btn-group" }, map(children, (button, index) => {
        return React.cloneElement(button, {
            onClick(event) {
                const { children: label, onClick } = button.props;
                onClick(event);
                onChange(event, label, index);
            },
            type: 'group-item',
        });
    })));
};
export class StatefulToggleButtons extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeIndex: findActiveIndex(this.props.children),
        };
    }
    render() {
        const { activeIndex } = this.state;
        const buttons = map(this.props.children, (button, index) => {
            return React.cloneElement(button, {
                active: index === activeIndex,
            });
        });
        return (React.createElement(ToggleButtons, Object.assign({}, this.props, { onChange: this.handleChange }), buttons));
    }
    handleChange(event, label, index) {
        const { onChange: handleChange } = this.props;
        this.setState({
            activeIndex: index,
        }, () => {
            handleChange(event, label, index);
        });
    }
}
export default ToggleButtons;
//# sourceMappingURL=toggle-buttons.js.map