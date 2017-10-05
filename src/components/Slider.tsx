import * as React from 'React';

export type SliderProps = {
  value: number;
  id?: string;
  label?: boolean;
  onChange: (event: any) => void;
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

Slider.defaultProps = {
  value: 0,
  label: true,
};
