import * as React from 'react';

export type SliderProps = {
  value: number;
  id?: string;
  label?: boolean;
  onChange?: (event: any, value?: number) => void;
};

const Slider: React.SFC<SliderProps> = ({
  value,
  id,
  label,
  onChange: handleChange,
}) => {
  return (
    <div className="input-range-wrap">
      <input
        id={id}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
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

  handleChange(event: any) {
    const value = event.target.value;
    this.setState({ value }, () => {
      this.props.onChange(event, value);
    });
  }

  render() {
    const { onChange } = this.props;
    const { value } = this.state;
    return (
      <Slider {...this.props} value={value} onChange={this.handleChange} />
    );
  }
}

Slider.defaultProps = {
  value: 0,
  label: true,
};

export default Slider;
