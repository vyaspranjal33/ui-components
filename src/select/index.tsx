import React from 'react';
import ReactSelect from 'react-select';
import ReactCreateable from 'react-select/lib/Creatable';
import mixins from '../styles/global/mixins.scss';
import dropDownShadow from '../styles/global/mixins/dropdownShadow.scss';
import cn from '../utilities/classnames';
import Styles from './select.module.scss';

const inputSelect = {
  color: 'inherit',
  margin: 0,
};

const multiValueBaseStyles = {
  backgroundColor: Styles['sg-blue'],
  color: Styles.white,
  fontSize: 12,
};
const disabledLabel = (disabled: boolean) =>
  disabled
    ? {
        backgroundColor: Styles['select-disabled-color'],
      }
    : {};

const SelectStyles = {
  clearIndicator: (base: object) => {
    return { display: 'none' };
  },
  container: (base: object) => {
    return { ...base };
  },
  control: (base: object, state: any) => {
    const control = {
      ':hover': {
        border: 0,
        borderBottom: `1px solid ${Styles['slate-20']}`,
      },
      backgroundColor: 'transparent',
      border: 0,
      borderBottom: `1px solid ${Styles['slate-20']}`,
      borderRadius: 0,
      boxShadow: 'none',
      color: Styles.slate,
      fontSize: 13,
      minHeight: 'auto',
    };

    const focusState = state.isFocused
      ? {
          borderBottomColor: Styles['sg-blue'],
          boxShadow: `${Styles['sg-blue']} 0 1px 0`,
        }
      : {};
    const disabledState = state.selectProps.disabled
      ? {
          color: Styles['select-disabled-color'],
        }
      : {};

    const errorState = state.selectProps.error
      ? {
          borderBottomColor: Styles['ron-burgundy'],
          boxShadow: `${Styles['ron-burgundy']} 0 1px 0`,
        }
      : {};

    const placeholderState = !state.hasValue
      ? {
          color: Styles['slate-40'],
        }
      : {};
    return {
      ...base,
      ...control,
      ...focusState,
      ...errorState,
      ...disabledState,
      ...placeholderState,
    };
  },
  dropdownIndicator: (base: object) => {
    const dropdownIndicator = {
      padding: 0,

      '&::after': {
        ...mixins,
        color: Styles['slate-60'],
        content: `${Styles['icon-caret']}`,
        position: 'absolute',
        right: 5,
      },

      svg: {
        display: 'none',
      },
    };

    return { ...base, ...dropdownIndicator };
  },
  indicatorSeparator: () => {
    return {};
  },

  groupHeading: (base: object) => {
    const groupStyle = {
      color: Styles.slate,
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 0,
      padding: '9px 30px',
      textTransform: 'capitalize',
    };
    return { ...base, ...groupStyle };
  },

  menu: (base: object) => {
    const menu = {
      ...dropDownShadow,
      backgroundColor: Styles['slate-02'],
      borderColor: Styles['slate-10'],
      borderRadius: 2,
      fontSize: 13,
      margin: 0,
    };

    return { ...base, ...menu };
  },

  multiValue: (base: object, state: any) => {
    return {
      ...base,
      ...multiValueBaseStyles,
      ...disabledLabel(state.selectProps.disabled),
    };
  },
  multiValueLabel: (base: object, state: any) => {
    return {
      ...base,
      ...multiValueBaseStyles,
      ...{
        padding: 3,
        paddingLeft: 6,
        paddingTop: 4,
      },
      ...disabledLabel(state.selectProps.disabled),
    };
  },
  multiValueRemove: (base: object, state: any) => {
    return {
      ...base,
      ...{
        ...multiValueBaseStyles,
        ':hover': {
          backgroundColor: Styles['sg-blue'],
          cursor: 'pointer',
        },
        paddingLeft: 0,
      },
      ...disabledLabel(state.selectProps.disabled),
    };
  },
  option: (base: object, state: any) => {
    const focusedState = state.isFocused ? { backgroundColor: '#e9ecef' } : {};
    const isSelected = state.isSelected
      ? { backgroundColor: '#d4dadf', color: '#294661' }
      : {};

    return {
      ...base,
      padding: '9px 30px',
      ...focusedState,
      ...isSelected,
      ':active': {},
      'line-height': '18px',
    };
  },
  singleValue: (base: object) => {
    return { ...base, ...inputSelect };
  },
  valueContainer: (base: object) => {
    return { ...base, ...inputSelect };
  },
};
const Select: React.SFC<any> = props => {
  return (
    <div
      className={cn(Styles['input-select-wrap'], {
        [Styles['is-required']]: props.required,
        [Styles['is-error']]: props.error,
        [Styles['is-disabled']]: props.disabled,
      })}
    >
      {props.label && (
        <label className={cn(Styles['input-select-label'])}>
          {props.label}
        </label>
      )}
      <ReactSelect
        {...props}
        styles={{ ...SelectStyles, ...props.styles }}
        isDisabled={props.disabled}
      />
      {props.info && (
        <span
          className={cn(Styles['input-info'], {
            [Styles.danger]: props.error,
            [Styles.isDisabled]: props.disabled,
          })}
        >
          {props.info}
        </span>
      )}
    </div>
  );
};

const Createable: React.SFC<any> = props => {
  return (
    <div
      className={cn(Styles['input-select-wrap'], {
        [Styles['is-required']]: props.required,
        [Styles['is-error']]: props.error,
        [Styles['is-disabled']]: props.disabled,
      })}
    >
      {props.label && (
        <label className={cn(Styles['input-select-label'])}>
          {props.label}
        </label>
      )}
      <ReactCreateable
        {...props}
        styles={{ ...SelectStyles, ...props.styles }}
        isDisabled={props.disabled}
      />
      {props.info && (
        <span
          className={cn(Styles['input-info'], {
            [Styles.danger]: props.error,
            [Styles.isDisabled]: props.disabled,
          })}
        >
          {props.info}
        </span>
      )}
    </div>
  );
};

export default Select;
export { Select, Createable };
