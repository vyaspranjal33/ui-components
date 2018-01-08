import capitalize from 'lodash/capitalize';
import identity from 'lodash/identity';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import values from 'lodash/values';
import React, { PureComponent, ReactElement } from 'react';
import Button from './Button';
import ButtonList from './ButtonList';
import { TextInput } from './TextInput';

const filterControlStyle = {
  display: 'flex',
  justifyContent: 'space-between' as 'space-between',
};

const inlineClearButtonStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  justifyContent: 'center' as 'center',
  paddingLeft: '20px',
};

export interface FilterableListProps {
  clearButtonInHeader?: boolean;
  clearButtonLabel?: string;
  filterOn?: string | string[];
  items: any[];
  onClear?: (event?: any) => void;
  onFilter?: (items: any[], filters: {}) => any[];
  renderControls: (filterOptions: { [key: string]: any }) => ReactElement<any>;
  renderItems: (items: any[]) => ReactElement<any>;
  showClearButton?: boolean;
  title: string;
}

export interface FilterableListState {
  [key: string]: string;
}

export default class FilterableList extends PureComponent<
  FilterableListProps,
  FilterableListState
> {
  public static defaultProps = {
    clearButtonInHeader: false,
    clearButtonLabel: 'Clear',
    filterOn: [''],
    showClearButton: false,
  };

  public state: { [key: string]: string } = {};
  public handlers = {};

  constructor(props: FilterableListProps) {
    super(props);

    const filterOn = isArray(props.filterOn)
      ? props.filterOn
      : [props.filterOn];

    for (const name of filterOn) {
      if (name) {
        this.state[name] = '';
        this.handlers[
          `handleFilter${capitalize(name)}Change`
        ] = this.handleFilterChange.bind(this, name);
      } else {
        this.state.value = '';
        this.handlers[`handleFilterChange`] = this.handleFilterChange.bind(
          this,
          'value',
        );
      }
    }
  }

  public handleFilterChange(
    filterName: string,
    event: any,
    callback?: (event?: any, value?: string | number) => void,
  ) {
    const value = event.target.value;
    this.setState(
      {
        [filterName]: value,
      },
      () => {
        if (isFunction(callback)) {
          callback(event, value);
        }
      },
    );
  }

  public get filteredItems(): any[] {
    // If a function to filter items is passed in, then use that.
    const { onFilter, items } = this.props;
    if (onFilter) {
      return onFilter(items, this.state);
    }

    const filters = values(this.state)
      .join()
      .toLowerCase();
    const includesFilters = (value: string) =>
      value
        .toString()
        .toLowerCase()
        .includes(filters);

    return items.filter((item: string | {}): boolean => {
      if (typeof item === 'string') {
        return includesFilters(item);
      }
      return values(item)
        .map(includesFilters)
        .some(identity);
    });
  }

  public get clearButton() {
    return (
      <ButtonList style={inlineClearButtonStyle}>
        <Button small type="secondary"  onClick={this.handleClear}>
          {this.props.clearButtonLabel}
        </Button>
      </ButtonList>
    );
  }

  public get showClearButtonInHeader() {
    return this.props.showClearButton && this.props.clearButtonInHeader;
  }

  public get showClearButtonInline() {
    return this.props.showClearButton && !this.props.clearButtonInHeader;
  }

  public render() {
    const {
      clearButtonLabel,
      title,
      showClearButton,
      renderControls,
      renderItems,
    } = this.props;

    return (
      <section className="FilterableList">
        <div className="filter-wrap">
          <div className="filter-header">
            <p className="filter-title">{title}</p>
            {this.showClearButtonInHeader && this.clearButton}
          </div>
          <div className="filter-list" style={filterControlStyle}>
            {renderControls({ ...this.state, ...this.handlers })}
            {this.showClearButtonInline && this.clearButton}
          </div>
        </div>
        <div className="FilterableListItems">
          {renderItems(this.filteredItems)}
        </div>
      </section>
    );
  }

  private handleClear = (event: any) => {
    if (this.props.onClear) { return this.props.onClear(event); }
    for (const key of Object.keys(this.state)) {
      this.setState({ [key]: '' });
    }
  }
}
