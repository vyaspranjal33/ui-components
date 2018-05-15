import React from 'react';
import cn from './utilities/classnames';

export interface PageHeaderProps {
  children?: React.ReactNode;
}

export interface PageHeadingProps {
  children?: React.ReactNode;
  title?: string | number;
  className?: string;
}

const headerStyle = {
  marginTop: 10,
} as React.CSSProperties;

const headingStyle = {
  color: '#294661',
  fontFamily: 'Colfax,Proxima Nova,Helvetica,sans-serif',
  fontWeight: 300,
} as React.CSSProperties;

export const PageHeader: React.SFC<PageHeaderProps> = ({ children, ...attributes }) => (
  <header {...attributes}>
    {children}
  </header>
);

export const PageHeading: React.SFC<PageHeadingProps> = ({ children, className, title, ...attributes }) => (
  <div className={cn('content-header', className)} style={headerStyle} {...attributes}>
    <h1 style={headingStyle}>{title}</h1>
    {children && <div className="btn-list">{children}</div>}
  </div>
);

PageHeading.defaultProps = {
  title: '',
};

export default PageHeader;
