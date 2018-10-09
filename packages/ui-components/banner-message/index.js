import React from 'react';
import cn from '../utilities/classnames';
import Styles from './banner-message.module.scss';
const BannerMessage = ({ className, type, children, }) => (React.createElement("div", { className: cn(Styles['banner-message'], className, Styles[`banner-message-${type}`]) }, children));
export default BannerMessage;
//# sourceMappingURL=index.js.map