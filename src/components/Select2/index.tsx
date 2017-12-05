import * as cn from 'classnames';
import * as $ from 'jquery';
import * as React from 'react';
import 'select2';

import { OptGroup, Option } from './Option';
export { OptGroup, Option };

export interface Select2Props {
  disabled?: boolean;
  children: any;
  error?: string;
  required?: boolean;
  multiple?: boolean;
  label: string;
  placeholder?: string;
  id: string;
  value: string[] | string | number;
  width?: string;
  noSearch?: boolean;
  onChange: (e: JQuery.Event, val: string[] | string | number) => void;
}

export class Select2 extends React.Component<Select2Props> {
  public static defaultProps = {
    disabled: false,
    error: '',
    multiple: false,
    noSearch: false,
    placeholder: '',
    required: false,
    width: '100%',
  };

  private select: any;

  public componentDidMount() {
    const { placeholder, width } = this.props;

    $(this.select).select2({
      minimumResultsForSearch: this.props.noSearch ? -1 : undefined,
      placeholder,
      width,
    })
    .focus(() => $(this.select).select2('open'))
    .on('change', (e: JQuery.Event) => this.props.onChange(e, $(this.select).val()));
  }

  public componentWillUnmount() {
    $(this.select).select2('destroy');
  }

  public render() {
    const {
      error,
      id,
      label,
    } = this.props;

    return (
      <div
        className={cn('input-select-wrap', {
          'is-error': !!error,
          'is-required': this.props.required,
        })}
      >
        {label && <label className="input-select-label" htmlFor={id}>{label}</label>}
        <select
          disabled={this.props.disabled}
          id={id}
          multiple={this.props.multiple}
          ref={(c) => this.select = c}
          value={this.props.value}
        >
          {this.props.children}
        </select>
        {
          error &&
            <span className="input-info danger">{error}</span>
        }
      </div>
    );
  }
}

export default Select2;
