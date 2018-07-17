import React, { Fragment } from 'react';
import Styles from './styles/checkbox-radio.module.scss';

export interface RadioGroupProps {
  children: React.ReactNode;
  name: string;
  onChange: (event: any) => void;
}

const { map } = React.Children;
const radioGroupMapper = (props: RadioGroupProps) =>
  map(
    props.children,
    (child: React.ReactElement<RadioProps> | null) =>
      child && (
        <child.type
          key={child.props.value}
          name={props.name}
          onChange={props.onChange}
          {...child.props}
        />
      )
  );

export const RadioGroup: React.SFC<RadioGroupProps> = (
  props: RadioGroupProps
) => <Fragment>{radioGroupMapper(props)}</Fragment>;

export interface RadioProps {
  checked: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  label: React.ReactNode | string;
  name?: string;
  onChange?: (event: any) => void;
  value: string;
}

export const Radio: React.SFC<RadioProps> = ({
  checked,
  children,
  defaultChecked,
  disabled,
  id,
  label,
  name,
  onChange,
  value,
  ...attributes
}) => {
  id = id || `radio-${value.toLowerCase()}`;
  return (
    <div className={Styles['input-radio-wrap']}>
      <input
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
        {...attributes}
      />
      <label className={Styles['input-radio-label']} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
const propsChecked = (props: RadioProps) => props.checked;
export class StatefulRadio extends React.Component<
  RadioProps,
  {
    checked: boolean;
  }
> {
  public readonly state = {
    checked: propsChecked(this.props),
  };

  constructor(props: RadioProps) {
    super(props);

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
      }
    );
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
