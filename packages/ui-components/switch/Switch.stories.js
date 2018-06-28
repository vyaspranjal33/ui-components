import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Switch from './index';
const stories = storiesOf('Switch', module);
class SwitchContainer extends Component {
    constructor(props) {
        super(props);
        this.onChange = (e) => {
            this.setState({ on: !this.state.on });
        };
        this.state = { on: this.props.on };
    }
    render() {
        return (React.createElement(Switch, Object.assign({}, this.props, { id: this.props.id, on: this.state.on, onChange: this.onChange })));
    }
}
stories.add('Switch - On', () => React.createElement(SwitchContainer, { id: "switch-example-on", on: true }));
stories.add('Switch - Off', () => React.createElement(SwitchContainer, { id: "switch-example-off" }));
stories.add('Switch - Disabled', () => (React.createElement(SwitchContainer, { id: "switch-example-disabled", disabled: true, on: true })));
//# sourceMappingURL=Switch.stories.js.map