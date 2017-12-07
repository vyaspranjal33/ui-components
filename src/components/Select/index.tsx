import React from 'react';

import cn from '../../utilities/classnames';
import Option from './Option';
export { Option };

export interface SelectProps {
  disabled?: boolean;
  children: any;
  error?: boolean;
  required?: boolean;
  label: string;
  placeholder?: string;
  noEmptyOption?: boolean;
}

export interface SelectState {
  open: boolean;
  focus: boolean;
}

export class Select extends React.Component<SelectProps, SelectState> {
  state = {
    focus: false,
    open: false,
  };

  public openMenu = () => {
    this.setState({
      open: true,
    });
  }

  public removeFocus = () => {
    this.setState({
      focus: false,
      open: false,
    });
  }

  public render() {
    const {
      children,
      disabled,
      error,
      label,
      noEmptyOption,
      placeholder,
      required,
    } = this.props;
    const { open } = this.state;
    return (
      <div
        className={cn('input-select-wrap', {
          'is-disabled': disabled,
          'is-error': error,
          'is-required': required,
        })}
      >
        <label
          className="input-select-label"
          htmlFor="select2-example-required"
        >
          {label}
        </label>
        <select
          className="input-select2 select2-hidden-accessible"
          id="select2-example-required"
          data-placeholder={placeholder}
          tabIndex={-1}
          aria-hidden="true"
        >
          {!noEmptyOption && <Option />}
          {children}
        </select>
        <span
          className={cn(
            'select2',
            'select2-container',
            'select2-container--default',
            'select2-container--below',
            {
              'select2-container--open': open,
            },
          )}
          dir="ltr"
          style={{ width: '100%' }}
          onClick={this.openMenu}
          onBlur={this.removeFocus}
        >
          <span className="selection">
            <span
              className="select2-selection select2-selection--single"
              role="combobox"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={0}
              aria-labelledby="select2-select2-example-required-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-select2-example-required-container"
              >
                <span className="select2-selection__placeholder">
                  {placeholder}
                </span>
              </span>
              <span className="select2-selection__arrow" role="presentation">
                <b role="presentation" />
              </span>
            </span>
          </span>
          <span className="dropdown-wrapper" aria-hidden="true" />
        </span>
      </div>
    );
  }
}

export default Select;
