import * as React from 'react';

export interface ToggleButtonsProps {
  children?: Array<React.ReactElement<any>>;
}

const { map } = React.Children;

interface ToggleButtonProps {
  children: Array<React.ReactElement<any>>;
  onChange?: (children: React.ReactNode) => any;
}

class ToggleButtons extends React.Component<ToggleButtonProps, any> {
  constructor(props: ToggleButtonProps) {
    super();

    const activeButton = map(
      props.children,
      (button: React.ReactElement<any>) => button.props.active,
    ).indexOf(true);

    this.state = {
      activeIndex: activeButton !== -1 ? activeButton : 0,
    };
  }

  public handleClick(index: number) {
    const { children, onChange } = this.props;
    return (event: any) => {
      this.setState(
        {
          activeIndex: index,
        },
        () => {
          onChange(children[index].props.children);
        },
      );
    };
  }

  public render() {
    const { children } = this.props;
    const { activeIndex } = this.state;
    return (
      <div className="btn-group">
        {map(children, (button: React.ReactElement<any>, index) => {
          const active = index === activeIndex;
          return React.cloneElement(button, {
            active,
            onClick: this.handleClick(index).bind(this),
            type: 'group-item',
          });
        })}
      </div>
    );
  }
}

export default ToggleButtons;
