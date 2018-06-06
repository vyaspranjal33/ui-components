import React, { Fragment } from 'react';

export interface AccordionPanelTitleTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}
const AccordionPanelTitle: React.SFC<AccordionPanelTitleTextProps> = ({
  text,
  style,
  className,
  ...attributes
}) => (
  <h2 className={className} style={style} {...attributes}>
    {text}
  </h2>
);

export default AccordionPanelTitle;
