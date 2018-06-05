import React, { Fragment } from 'react';
import AnimateHeight from 'react-animate-height';
import Badge from '../badge';
import Icon from '../icon';
import Loader from '../loader';
import { IconType } from '../types/icons';
import cn from '../utilities/classnames';
import AccordionPanelDescription from './accordion-panel-description';
import AccordionPanelIcon from './accordion-panel-icon';
import AccordionPanelTitle from './accordion-panel-title';

export interface AccordionPanelProps {
  children: any;
  className?: string;
  icon?: IconType;
  isOpen?: boolean;
  noPadding?: boolean;
  onClick?: (e: any) => void;
  title?: any;
}

const AccordionPanelSFC: React.SFC<AccordionPanelProps> = ({
  children,
  className,
  icon,
  isOpen,
  noPadding,
  onClick,
  title,
  ...attributes
}) => {
  return (
    <div
      className={cn('accordion-panel', className, {
        'has-child': noPadding,
        'is-visible': isOpen,
      })}
      {...attributes}
    >
      <div className="accordion-title" onClick={onClick}>
        {title}
      </div>
      <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
        <div className="accordion-content" style={{ display: 'block' }}>
          {children}
        </div>
      </AnimateHeight>
    </div>
  );
};

export class AccordionPanel extends React.Component<AccordionPanelProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };
  }

  public render() {
    return (
      <AccordionPanelSFC
        {...this.props}
        isOpen={this.state.isOpen}
        onClick={this.onAccordionPanelClick}
      >
        {this.props.children}
      </AccordionPanelSFC>
    );
  }
  private onAccordionPanelClick = (e: any) => {
    this.setState({ isOpen: !this.state.isOpen });
  };
}

export default AccordionPanel;
export {
  AccordionPanelDescription,
  AccordionPanelTitle,
  AccordionPanelIcon,
  AccordionPanelSFC,
};
