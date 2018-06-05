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
  children: React.ReactNode;
  className?: string;
  icon?: IconType;
  open?: boolean;
  noPadding?: boolean;
  onClick?: (e: any) => void;
  title?: React.ReactNode;
}

const AccordionPanelSFC: React.SFC<AccordionPanelProps> = ({
  children,
  className,
  icon,
  open,
  noPadding,
  onClick,
  title,
  ...attributes
}) => {
  return (
    <div
      className={cn('accordion-panel', className, {
        'has-child': noPadding,
        'is-visible': open,
      })}
      {...attributes}
    >
      <div className="accordion-title" onClick={onClick}>
        {title}
      </div>
      <AnimateHeight duration={500} height={open ? 'auto' : 0}>
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
        open={this.state.isOpen}
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
