import React from 'react';
import cn from '../utilities/classnames';
import findActiveIndex from '../utilities/find-active-index';
import { ButtonProps } from './Button';

const { map } = React.Children;

export interface ToggleButtonsProps {
  children?: any[];
  onChange?: (children: React.ReactNode, label?: string, index?: number) => any;
}

export interface ToggleButtonsState {
  activeIndex: number;
}

export const ToggleButtons: React.SFC<ToggleButtonsProps> = ({
  children,
  onChange,
}) => {
  return (
    <div className="btn-group">
      {map(children, (button: React.ReactElement<any>, index) => {
        return React.cloneElement(button, {
          onClick(event: any) {
            const { children: label, onClick } = button.props;
            onClick(event);
            onChange(event, label, index);
          },
          type: 'group-item',
        });
      })}
    </div>
  );
};

export class StatefulToggleButtons extends React.Component<
  ToggleButtonsProps,
  ToggleButtonsState
> {
  public state = {
    activeIndex: findActiveIndex(this.props.children),
  };

  public render() {
    const { activeIndex } = this.state;
    const buttons = map(
      this.props.children,
      (button: React.ReactElement<any>, index) => {
        return React.cloneElement(button, {
          active: index === activeIndex,
        });
      },
    );
    return (
      <ToggleButtons {...this.props} onChange={this.handleChange}>
        {buttons}
      </ToggleButtons>
    );
  }

  private handleChange(event: any, label: string, index: number) {
    const { onChange: handleChange } = this.props;
    this.setState(
      {
        activeIndex: index,
      },
      () => {
        handleChange(event, label, index);
      },
    );
  }
}

export default ToggleButtons;
