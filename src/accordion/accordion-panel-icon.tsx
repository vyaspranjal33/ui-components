import React from 'react';
import Icon from '../icon';
import { IconType } from '../types/icons';
import Styles from './accordion.module.scss';

export interface AccordionPanelIconProps {
  iconType: IconType;
}

const AccordionPanelIcon: React.SFC<AccordionPanelIconProps> = ({
  iconType,
}) => <Icon className={Styles['accordion-icon']} type={iconType} />;

export default AccordionPanelIcon;
