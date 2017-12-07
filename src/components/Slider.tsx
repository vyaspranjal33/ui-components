import React from 'react';

export interface SliderProps {
  value: number;
  id?: string;
  label?: boolean;
  onChange?: (event: any, value?: number) => void;
}

export const Slider: React.SFC<SliderProps> = ({
  value,
  id,
  label,
  onChange: handleChange,
}) => {
  return (
    <div className="input-range-wrap">
      <input
        id={id}
        max="100"
        min="0"
        onChange={handleChange}
        type="range"
        value={value}
      />
      {label && <div className="input-range-percent">{value}%</div>}
    </div>
  );
};

export class StatefulSlider extends React.Component<
  SliderProps,
  { value: number }
> {
  constructor(props: SliderProps) {
    super();
    this.state = {
      value: props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: any) {
    const value = event.target.value;
    this.setState({ value }, () => {
      this.props.onChange(event, value);
    });
  }

  public render() {
    const { onChange } = this.props;
    const { value } = this.state;
    return (
      <Slider {...this.props} value={value} onChange={this.handleChange} />
    );
  }
}

Slider.defaultProps = {
  label: true,
  value: 0,
};

export default Slider;
