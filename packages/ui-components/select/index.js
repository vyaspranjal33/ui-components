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
const disabledLabel = (disabled) => disabled
    ? {
        backgroundColor: Styles['select-disabled-color'],
    }
    : {};
const SelectStyles = {
    clearIndicator: (base) => {
        return { display: 'none' };
    },
    container: (base) => {
        return Object.assign({}, base);
    },
    control: (base, state) => {
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
        return Object.assign({}, base, control, focusState, errorState, disabledState, placeholderState);
    },
    dropdownIndicator: (base) => {
        const dropdownIndicator = {
            padding: 0,
            '&::after': Object.assign({}, mixins, { color: Styles['slate-60'], content: `${Styles['icon-caret']}`, position: 'absolute', right: 5 }),
            svg: {
                display: 'none',
            },
        };
        return Object.assign({}, base, dropdownIndicator);
    },
    indicatorSeparator: () => {
        return {};
    },
    groupHeading: (base) => {
        const groupStyle = {
            color: Styles.slate,
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 0,
            padding: '9px 30px',
            textTransform: 'capitalize',
        };
        return Object.assign({}, base, groupStyle);
    },
    menu: (base) => {
        const menu = Object.assign({}, dropDownShadow, { backgroundColor: Styles['slate-02'], borderColor: Styles['slate-10'], borderRadius: 2, fontSize: 13, margin: 0 });
        return Object.assign({}, base, menu);
    },
    multiValue: (base, state) => {
        return Object.assign({}, base, multiValueBaseStyles, disabledLabel(state.selectProps.disabled));
    },
    multiValueLabel: (base, state) => {
        return Object.assign({}, base, multiValueBaseStyles, {
            padding: 3,
            paddingLeft: 6,
            paddingTop: 4,
        }, disabledLabel(state.selectProps.disabled));
    },
    multiValueRemove: (base, state) => {
        return Object.assign({}, base, Object.assign({}, multiValueBaseStyles, { ':hover': {
                backgroundColor: Styles['sg-blue'],
                cursor: 'pointer',
            }, paddingLeft: 0 }), disabledLabel(state.selectProps.disabled));
    },
    option: (base) => {
        return Object.assign({}, base, { padding: '9px 30px' });
    },
    singleValue: (base) => {
        return Object.assign({}, base, inputSelect);
    },
    valueContainer: (base) => {
        return Object.assign({}, base, inputSelect);
    },
};
const Select = props => {
    return (React.createElement("div", { className: cn(Styles['input-select-wrap'], {
            [Styles['is-required']]: props.required,
            [Styles['is-error']]: props.error,
            [Styles['is-disabled']]: props.disabled,
        }) },
        props.label && (React.createElement("label", { className: cn(Styles['input-select-label']) }, props.label)),
        React.createElement(ReactSelect, Object.assign({}, props, { styles: Object.assign({}, SelectStyles, props.styles), isDisabled: props.disabled })),
        props.info && (React.createElement("span", { className: cn(Styles['input-info'], {
                [Styles.danger]: props.error,
                [Styles.isDisabled]: props.disabled,
            }) }, props.info))));
};
const Createable = props => {
    return (React.createElement("div", { className: cn(Styles['input-select-wrap'], {
            [Styles['is-required']]: props.required,
            [Styles['is-error']]: props.error,
            [Styles['is-disabled']]: props.disabled,
        }) },
        props.label && (React.createElement("label", { className: cn(Styles['input-select-label']) }, props.label)),
        React.createElement(ReactCreateable, Object.assign({}, props, { styles: Object.assign({}, SelectStyles, props.styles), isDisabled: props.disabled })),
        props.info && (React.createElement("span", { className: cn(Styles['input-info'], {
                [Styles.danger]: props.error,
                [Styles.isDisabled]: props.disabled,
            }) }, props.info))));
};
export default Select;
export { Select, Createable };
//# sourceMappingURL=index.js.map