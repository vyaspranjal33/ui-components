import React from 'react';
import Icon from '../icon';
import cn from '../utilities/classnames';
import Styles from './accordion.module.scss';
const AccordionPanelIcon = ({ iconType, }) => (React.createElement(Icon, { className: cn('accordion-icon', Styles['accordion-icon']), type: iconType }));
export default AccordionPanelIcon;
//# sourceMappingURL=accordion-panel-icon.js.map