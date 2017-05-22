// @flow
import React from 'react';
import cn from 'classnames';
import MenuItem from './MenuItem';
import Icon from './Icons';

class Menu extends React.Component {
  static defaultProps: {
    gear: false,
    text: '',
    primary: false,
    children: {},
  };

  constructor() {
    super();
    this.state = { active: false };
  }

  state: {
    active: boolean,
  };

  props: {
    children: MenuItem[] | MenuItem,
    gear: boolean,
    text: string,
    primary: boolean,
  };

  render() {
    return (
      <div
        className={cn('btn btn-dropdown dropdown ', {
          'btn-primary': this.props.primary,
          'is-active': this.state.active,
          'btn-dropdown-gear': this.props.gear,
        })}
        onClick={() => {
          this.setState({ active: !this.state.active });
        }}
        role="button"
      >
        {this.props.gear && <Icon type="gear" size="small" />}
        {this.props.text}
        <ul className="dropdown-menu">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default Menu;
