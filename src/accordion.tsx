import React, { Fragment } from 'react';
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
  children: any;
  className?: string;
  contentRender?: () => any;
  icon?: IconType;
  isOpen?: boolean;
  noPadding?: boolean;
  onClick?: (e: any) => void;
  title?: any;
}

export interface AccordionPanelTitleTextProps {
  text: string | JSX.Element;
}

export interface AccordionPanelIconProps {
  iconType: IconType;
}

export const AccordionPanelTitle: React.SFC<AccordionPanelTitleTextProps> = ({
  text,
}) =>
  typeof text === 'string' ? <h2>{text}</h2> : <Fragment>{text}</Fragment>;

export const AccordionPanelDescription: React.SFC<
  AccordionPanelTitleTextProps
> = ({ text }) =>
  typeof text === 'string' ? <p>{text}</p> : <Fragment>{text}</Fragment>;

export const AccordionPanelIcon: React.SFC<AccordionPanelIconProps> = ({
  iconType,
}) => <Icon className="accordion-icon" type={iconType} />;

export const AccordionPanel: React.SFC<AccordionPanelProps> = ({
  children,
  className,
  contentRender,
  icon,
  isOpen,
  noPadding,
  onClick,
  title,
}) => {
  return (
    <div
      className={cn('accordion-panel', className, {
        'has-child': noPadding,
        'is-visible': isOpen,
      })}
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
