import React, { Component } from 'react';
import cn from '../utilities/classnames';
import Styles from './banner-message.module.scss';

export interface BannerMessageProps {
  className?: string;
  type: 'beta' | 'info';
}

const BannerMessage: React.SFC<BannerMessageProps> = ({
  className,
  type,
  children,
}) => (
  <div
    className={cn(
      Styles['banner-message'],
      className,
      Styles[`banner-message-${type}`]
    )}
  >
    {children}
  </div>
);

export default BannerMessage;
