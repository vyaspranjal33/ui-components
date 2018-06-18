import React from 'react';
export default class ToggleAnything extends React.Component {
    constructor(props) {
        super(props);
        const { selectedKey = null } = props;
        this.state = {
            selectedKey,
        };
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
//# sourceMappingURL=toggle-anything.js.map