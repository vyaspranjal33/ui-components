import React, { RefObject } from 'react';

export interface SegmentWrapperProps {
  children?: any;
  editing?: boolean;
  onSubmit?: () => boolean;
}
export default class SegmentWrapper extends React.Component<
  SegmentWrapperProps,
  { editing: boolean }
> {
  public static defaultProps = {
    editing: false,
  };
  public state = { editing: this.props.editing };

  private self: RefObject<HTMLDivElement> = React.createRef();

  public render() {
    return (
      <div ref={this.self}>
        {this.props.children(this.state.editing, this.onEdit, this.self)}
      </div>
    );
  }
  public componentWillUnmount() {
    document.removeEventListener('click', this.submit);
  }
  public onEdit = () => {
    this.setState(prev => {
      const editing = !prev.editing;
      if (editing) {
        document.addEventListener('click', this.submit);
      }

      return { editing };
    });
  };
  public submit = (event: MouseEvent) => {
    const target = event.target as Element;
    const role = target.getAttribute('role');

    const finishSubmit = () => {
      this.setState({ editing: false });
      document.removeEventListener('click', this.submit);
    };

    if (
      !(
        this.self.current.contains(target) ||
        (role && role.indexOf('option') !== -1)
      )
    ) {
      if (this.props.onSubmit) {
        if (this.props.onSubmit()) {
          finishSubmit();
        }
      } else {
        finishSubmit();
      }
    }
  };
}
