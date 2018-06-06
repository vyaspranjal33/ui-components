import React, { Fragment } from 'react';
import Badge from '../badge';
import Icon from '../icon';
import { IconType } from '../types/icons';

export interface AccordionPanelIconProps {
  iconType: IconType;
}

const AccordionPanelIcon: React.SFC<AccordionPanelIconProps> = ({
  iconType,
}) => <Icon className="accordion-icon" type={iconType} />;

export default AccordionPanelIcon;
