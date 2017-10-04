import * as React from 'react';

export type ToggleButtonsProps = {
  children?: React.ReactElement<any>[];
};

const { map, toArray } = React.Children;

type ToggleButtonProps = {
  children: React.ReactElement<any>[];
  onChange?: (children: React.ReactNode) => any;
};

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

  handleClick(index: number) {
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
            type: 'group-item',
            active,
            onClick: this.handleClick(index).bind(this),
          });
        })}
      </div>
    );
  }
}

export default ToggleButtons;
