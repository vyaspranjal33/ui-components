import React from 'react';
import AnimateHeight from 'react-animate-height';
import Badge from './badge';
import Icon from './icon';
import Loader from './loader';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export interface AccordionProps {
  caretLeft?: boolean;
  className?: string;
  isEditor?: boolean;
  isLarge?: boolean;
  isList?: boolean;
}

export interface AccordionPanelProps {
  className?: string;
  contentRender?: () => any;
  icon?: IconType;
  isOpen?: boolean;
  noPadding?: boolean;
  onClick?: (e: any) => void;
  title?: string;
  titleDescription?: string;
  titleRender?: (title?: string) => any;
}

export const AccordionPanel: React.SFC<AccordionPanelProps> = ({
  className,
  contentRender,
  icon,
  isOpen,
  noPadding,
  onClick,
  title,
  titleDescription,
  titleRender,
}) => {
  return (
    <div
      className={cn('accordion-panel', className, {
        'has-child': noPadding,
        'is-visible': isOpen,
      })}
    >
      <div className="accordion-title" onClick={onClick}>
        {icon && <Icon className="accordion-icon" type={icon} />}
        {(titleRender && titleRender(title)) || (title && <h2>{title}</h2>)}
        {titleDescription && <p>{titleDescription}</p>}
      </div>
      <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
        <div className="accordion-content" style={{ display: 'block' }}>
          {contentRender()}
        </div>
      </AnimateHeight>
    </div>
  );
};

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
