import React, { Fragment } from 'react';

export interface AccordionPanelDescriptionProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

const AccordionPanelDescription: React.SFC<AccordionPanelDescriptionProps> = ({
  text,
  style,
  className,
  ...attributes
}) => (
  <p style={style} className={className} {...attributes}>
    {text}
  </p>
);

export default AccordionPanelDescription;
