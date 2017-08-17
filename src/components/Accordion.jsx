// @flow
import React from 'react';
import cn from 'classnames';

export const AccordionChecklistItem = (props) => {
  return (
    <li className={cn('accordion-check-circle', {
      'is-complete': props.isComplete
    })}>
      {props.children}
    </li>
  );
};

class Accordion extends React.Component {
  constructor() {
    super();
    this.state = { isVisible: false };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  state: {
    isVisible: boolean,
  };

  props: {
    caretLeft: boolean,
    large: boolean,
    title: string,
    isChildAccordion: boolean,
    includesNestedAccordions: boolean,
    containsList: boolean,
  }

  toggleVisibility() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  render() {
    return (
      <div className={cn('accordion-wrapper', {
        'accordion-caret-left': this.props.caretLeft,
        'accordion-large': this.props.large,
      })}>
        <div className={cn('accordion-panel', {
          'is-visible': this.state.isVisible,
          'has-child': this.props.includesNestedAccordions
        })}>
          <div className="accordion-title" onClick={this.toggleVisibility}>
            { !this.props.isChildAccordion ? <h2>{this.props.title}</h2> : <h3>{this.props.title}</h3> }
          </div>
          <div
            className={cn('accordion-content', {
              'accordion-list': this.props.containsList,
            })}
            style={this.state.isVisible ? {display: 'block'} : {}}>
              {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
