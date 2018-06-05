import React, { Fragment } from 'react';

export interface AccordionPanelTitleTextProps {
  text: string | JSX.Element;
}
const AccordionPanelTitle: React.SFC<AccordionPanelTitleTextProps> = ({
  text,
}) =>
  typeof text === 'string' ? <h2>{text}</h2> : <Fragment>{text}</Fragment>;

export default AccordionPanelTitle;
