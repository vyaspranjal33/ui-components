import React from 'react';
import AnimateHeight from 'react-animate-height';
import { IconType } from '../types/icons';
import cn from '../utilities/classnames';
import AccordionPanelDescription from './accordion-panel-description';
import AccordionPanelIcon from './accordion-panel-icon';
import AccordionPanelTitle from './accordion-panel-title';
import Styles from './accordion.module.scss';

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
      className={cn(Styles['accordion-panel'], className, {
        [Styles['has-child']]: noPadding,
        [Styles['is-visible']]: open,
      })}
      {...attributes}
    >
      <div className={Styles['accordion-title']} onClick={onClick}>
        {title}
      </div>
      <AnimateHeight duration={500} height={open ? 'auto' : 0}>
        <div
          className={Styles['accordion-content']}
          style={{ display: 'block' }}
        >
          {children}
        </div>
      </AnimateHeight>
    </div>
  );
};

export interface AccordionState {
  open: any;
}
export class AccordionPanel extends React.Component<
  AccordionPanelProps,
  AccordionState
> {
  public state: AccordionState;

  constructor(props: any) {
    super(props);

    this.state = {
      open: props.open,
    };
  }

  public render() {
    return (
      <AccordionPanelSFC
        {...this.props}
        open={this.state.open}
        onClick={this.onAccordionPanelClick}
      >
        {this.props.children}
      </AccordionPanelSFC>
    );
  }
  private onAccordionPanelClick = (e: any) => {
    this.setState({ open: !this.state.open });
  };
}

export default AccordionPanel;
export {
  AccordionPanelDescription,
  AccordionPanelTitle,
  AccordionPanelIcon,
  AccordionPanelSFC,
};
