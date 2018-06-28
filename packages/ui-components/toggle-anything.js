import React from 'react';
const getToggleProps = (props) => props.selectedKey;
export default class ToggleAnything extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { selectedKey: getToggleProps(this.props) };
    }
    render() {
        const keyArray = this.props.keys.map(key => ({
            active: key === this.state.selectedKey,
            key,
            onClick: (event) => {
                if (this.props.onChange) {
                    this.props.onChange(event, key);
                }
                this.setState({ selectedKey: key });
            },
        }));
        return this.props.children(...keyArray);
    }
}
ToggleAnything.defaultProps = {
    selectedKey: null,
};
//# sourceMappingURL=toggle-anything.js.map