import React from 'react';

export interface ToggleAnythingProps {
  keys: Array<string>;
  selectedKey?: string;
  children: (...arr: Array<AnythingKey>) => React.ReactNode;
  onChange?: (event: Event, key: string) => void;
}

export interface ToggleAnythingState {
  selectedKey: string;
}
export interface AnythingKey {
  active: boolean;
  key: string;
  onClick: (event: Event) => void;
}
const getToggleProps = (props: ToggleAnythingProps) => props.selectedKey;
export default class ToggleAnything extends React.Component<
  ToggleAnythingProps,
  ToggleAnythingState
> {
  public static defaultProps: Partial<ToggleAnythingProps> = {
    selectedKey: null,
  };
  public readonly state = { selectedKey: getToggleProps(this.props) };

  public render() {
    const keyArray: Array<AnythingKey> = this.props.keys.map(key => ({
      active: key === this.state.selectedKey,
      key,
      onClick: (event: Event) => {
        if (this.props.onChange) {
          this.props.onChange(event, key);
        }
        this.setState({ selectedKey: key });
      },
    }));
    return this.props.children(...keyArray);
  }
}
