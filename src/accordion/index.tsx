import React from 'react';
import cn from '../utilities/classnames';
import Styles from './accordion.module.scss';

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
      className={cn(Styles['accordion-wrapper'], className, {
        [Styles['accordion-caret-left']]: caretLeft,
        [Styles['accordion-large']]: large,
        [Styles['accordion-list']]: list,
        [Styles['is-editor']]: editor,
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
