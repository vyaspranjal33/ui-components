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

export default class ToggleAnything extends React.Component<
  ToggleAnythingProps,
  ToggleAnythingState
> {
  public state: ToggleAnythingState;

  constructor(props: ToggleAnythingProps) {
    super(props);
    const { selectedKey = null } = props;
    this.state = {
      selectedKey,
    };
  }

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
