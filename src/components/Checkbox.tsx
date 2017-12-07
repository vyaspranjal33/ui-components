import React from 'react';

export interface CheckboxProps {
  id?: string;
  children: string;
  disabled?: boolean;
  checked?: boolean;
  onChange: (event: any) => void;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  checked,
  children: value,
  disabled,
  id,
  onChange,
}) => {
  id = id || `checkbox-${value.toLowerCase()}`;
  return (
    <div className="input-checkbox-wrap">
      <input
        defaultChecked={checked}
        disabled={disabled}
        id={id}
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      <label className="input-checkbox-label" htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export class StatefulCheckbox extends React.Component<
  CheckboxProps,
  { checked: boolean }
> {
  constructor(props: CheckboxProps) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: any) {
    event.persist();
    this.setState(
      {
        checked: !this.state.checked,
      },
      () => {
        this.props.onChange(event);
      },
    );
  }

  public render() {
    return (
      <Checkbox
        {...this.props}
        checked={this.state.checked}
        onChange={this.handleChange}
      >
        {this.props.children}
      </Checkbox>
    );
  }
}

export default Checkbox;
