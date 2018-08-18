import React, { PureComponent, ReactText } from 'react';
import { Column } from './grid/column';
import { Row } from './grid/row';
import { TextInput } from './text-input';
import { Units } from './types/units';

export type QuadInputs = 'top' | 'right' | 'bottom' | 'left';
export type QuadInputValues = { [k in QuadInputs]: number };
export interface QuadInputProps {
  id: string;
  onChange: (e: any, values: QuadInputValues) => void;
  units: Units;
  values: QuadInputValues;
}

const inputs: Array<QuadInputs> = ['top', 'right', 'bottom', 'left'];

export class QuadInput extends PureComponent<QuadInputProps> {
  constructor(props: QuadInputProps) {
    super(props);
  }

  public render() {
    const { id, units, values } = this.props;
    return (
      <Row>
        {inputs.map(inputName => (
          <Column width={1}>
            <TextInput
              id={`${id}-${inputName}`}
              type="number"
              name={inputName}
              onChange={this.handleChange}
              icon={inputName}
              units={units}
              value={values[inputName]}
            />
          </Column>
        ))}
      </Row>
    );
  }

  private handleChange = (e: any, value: ReactText) => {
    const inputName = e.target.name;
    this.props.onChange(e, { ...this.props.values, [inputName]: value });
  };
}

export default QuadInput;
