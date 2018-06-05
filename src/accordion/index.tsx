import React, { Fragment } from 'react';
import AnimateHeight from 'react-animate-height';
import Badge from '../badge';
import Icon from '../icon';
import Loader from '../loader';
import { IconType } from '../types/icons';
import cn from '../utilities/classnames';
import {
  AccordionPanel,
  AccordionPanelDescription,
  AccordionPanelIcon,
  AccordionPanelSFC,
  AccordionPanelTitle,
} from './accordion-panel';

export interface AccordionProps {
  caretLeft?: boolean;
  className?: string;
  isEditor?: boolean;
  isLarge?: boolean;
  isList?: boolean;
}

export const Accordion: React.SFC<AccordionProps> = ({
  caretLeft,
  children,
  className,
  isEditor,
  isLarge,
  isList,
}) => {
  return (
    <div
      className={cn('accordion-wrapper', className, {
        'accordion-caret-left': caretLeft,
        'accordion-large': isLarge,
        'accordion-list': isList,
        'is-editor': isEditor,
      })}
    >
      {children}
    </div>
  );
};

export default Accordion;
export {
  AccordionPanel,
  AccordionPanelSFC,
  AccordionPanelDescription,
  AccordionPanelIcon,
  AccordionPanelTitle,
};
