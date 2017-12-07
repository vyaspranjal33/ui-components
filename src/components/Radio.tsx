import * as React from 'react';

export interface RadioProps {
  id?: string;
  children: string;
  disabled?: boolean;
  checked?: boolean;
  onChange: (event: any) => void;
}

export const Radio: React.SFC < RadioProps > = ({checked, children: value, disabled, id, onChange}) => {
  id = id || `radio-${value.toLowerCase()}`;
  return (
    <div className="input-radio-wrap">
      <input
        defaultChecked={checked}
        disabled={disabled}
        id={id}
        type="radio"
        value={value}
        onChange={onChange}
      />
      <label className="input-radio-label" htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export class StatefulRadio extends React.Component < RadioProps, {
  checked: boolean,
} > {
  constructor(props: RadioProps) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  public handleChange(event: any) {
    event.persist();
    this.setState({
      checked: !this.state.checked,
    }, () => {
      this
        .props
        .onChange(event);
    });
  }

  public render() {
    return (
      <Radio
        {...this.props}
        checked={this.state.checked}
        onChange={this.handleChange}
      >
        {this.props.children}
      </Radio>
    );
  }
}

export default Radio;
