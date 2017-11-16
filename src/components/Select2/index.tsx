import * as cn from 'classnames';
import * as React from 'react';
import * as $ from 'jquery';
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
  private select: any;

  public static defaultProps = {
    disabled: false,
    required: false,
    multiple: false,
    noSearch: false,
    error: '',
    placeholder: '',
    width: '100%',
  };

  componentDidMount() {
    const { placeholder, width } = this.props;

    $(this.select).select2({
      placeholder,
      width,
      minimumResultsForSearch: this.props.noSearch ? -1 : undefined,
    })
    .focus(() => $(this.select).select2('open'))
    .on('change', (e: JQuery.Event) => this.props.onChange(e, $(this.select).val()));
  }

  componentWillUnmount() {
    $(this.select).select2('destroy');
  }

  public render() {
    const {
      label,
      id,
      error,
    } = this.props;

    return (
      <div
        className={cn('input-select-wrap', {
          'is-required': this.props.required,
          'is-error': !!error,
        })}
      >
        {label && <label className="input-select-label" htmlFor={id}>{label}</label>}
        <select
          id={id}
          ref={c => this.select = c}
          value={this.props.value}
          disabled={this.props.disabled}
          multiple={this.props.multiple}
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
