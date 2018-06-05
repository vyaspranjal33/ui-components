import React, { Fragment } from 'react';

export interface AccordionPanelDescriptionProps {
  text: string | JSX.Element;
}

const AccordionPanelDescription: React.SFC<AccordionPanelDescriptionProps> = ({
  text,
}) => (typeof text === 'string' ? <p>{text}</p> : <Fragment>{text}</Fragment>);

export default AccordionPanelDescription;
