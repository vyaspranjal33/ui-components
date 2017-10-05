import * as React from 'react';
import findActiveIndex from '../utilities/find-active-index';
import { ButtonProps } from './Button';

export interface ToggleButtonsProps {
  children?: Array<React.ReactElement<ButtonProps>>;
}

const { map } = React.Children;

interface ToggleButtonProps {
  children: Array<React.ReactElement<any>>;
  onChange?: (children: React.ReactNode) => any;
}

interface ToggleButtonState {
  activeIndex: number;
}

class ToggleButtons extends React.Component<
  ToggleButtonProps,
  ToggleButtonState
> {
  constructor(props: ToggleButtonProps) {
    super();

    const activeIndex = findActiveIndex(props.children);

    this.state = {
      activeIndex,
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
