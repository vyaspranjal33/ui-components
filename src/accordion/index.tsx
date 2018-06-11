import React from 'react';
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
  editor?: boolean;
  large?: boolean;
  list?: boolean;
}

export const Accordion: React.SFC<AccordionProps> = ({
  caretLeft,
  children,
  className,
  editor,
  large,
  list,
}) => {
  return (
    <div
      className={cn('accordion-wrapper', className, {
        'accordion-caret-left': caretLeft,
        'accordion-large': large,
        'accordion-list': list,
        'is-editor': editor,
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
