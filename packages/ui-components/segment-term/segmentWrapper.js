import React from 'react';
export default class SegmentWrapper extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { editing: this.props.editing };
        this.self = React.createRef();
        this.onEdit = () => {
            this.setState(prev => {
                const editing = !prev.editing;
                if (editing) {
                    document.addEventListener('click', this.submit);
                }
                return { editing };
            });
        };
        this.submit = (event) => {
            const target = event.target;
            const role = target.getAttribute('role');
            const segmentTerm = this.self.current.querySelector('.segment-term') || this.self.current;
            const finishSubmit = () => {
                this.setState({ editing: false });
                document.removeEventListener('click', this.submit);
            };
            if (!(segmentTerm.contains(target) || (role && role.includes('option')))) {
                if (this.props.onSubmit) {
                    const isValid = this.props.onSubmit();
                    if (isValid) {
                        finishSubmit();
                    }
                }
                else {
                    finishSubmit();
                }
            }
        };
    }
    render() {
        return (React.createElement("div", { ref: this.self }, this.props.children(this.state.editing, this.onEdit, this.self)));
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.submit);
    }
    componentDidMount() {
        if (this.props.editing) {
            document.addEventListener('click', this.submit);
        }
    }
}
SegmentWrapper.defaultProps = {
    editing: false,
};
//# sourceMappingURL=segmentWrapper.js.map