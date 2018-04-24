import React from 'react';
import cn from './utilities/classnames';

export interface PageHeaderProps {
  children?: React.ReactNode;
}

export interface PageHeadingProps {
  children?: React.ReactNode;
  title?: string | number;
}

const headerStyle = {
  marginTop: 10,
} as React.CSSProperties;

const headingStyle = {
  color: '#294661',
  fontFamily: 'Colfax,Proxima Nova,Helvetica,sans-serif',
  fontWeight: 300,
} as React.CSSProperties;

export const PageHeader: React.SFC<PageHeaderProps> = ({ children }) => (
  <header>
    {children}
  </header>
);

export const PageHeading: React.SFC<PageHeadingProps> = ({ children, title }) => (
  <div className="content-header" style={headerStyle}>
    <h1 style={headingStyle}>{title}</h1>
    {children && <div className="btn-list">{children}</div>}
  </div>
);

PageHeading.defaultProps = {
  title: '',
};

export default PageHeader;
