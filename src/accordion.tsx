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
  onClick: (e: any, index: number) => void;
  panels: AccordionPanel[];
}

export interface AccordionPanel {
  hasChildren?: boolean;
  icon?: IconType;
  isOpen?: boolean;
  contentRender?: () => any;
  title?: string;
  titleDescription?: string;
  titleRender?: (title?: string) => any;
}

export const Accordion: React.SFC<AccordionProps> =
  ({
    caretLeft,
    className,
    isEditor,
    isLarge,
    isList,
    onClick,
    panels,
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
      {
        panels.map((panel: AccordionPanel, index) => {
          const {
            hasChildren,
            isOpen,
            icon,
            contentRender,
            title,
            titleDescription,
            titleRender,
          } = panel;
          return (
            <div
              key={index}
              className={cn('accordion-panel', className, {
                'has-child': hasChildren,
                'is-visible': isOpen,
              })}
            >
              <div
                className="accordion-title"
                onClick={(e) => onClick(e, index)}
              >
                {isLarge && icon && <Icon className="accordion-icon" type={icon} />}
                {(titleRender && titleRender(title)) || (title && <h2>{title}</h2>)}
                {isLarge && titleDescription && <p>{titleDescription}</p>}
              </div>
              <AnimateHeight
                duration={500}
                height={isOpen ? 'auto' : 0}
              >
                <div className="accordion-content" style={{display: 'block'}}>
                  {contentRender()}
                </div>
              </AnimateHeight>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Accordion;
