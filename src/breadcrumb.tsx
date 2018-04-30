import React from 'react';
import Styles from './styles/breadcrumb.module.scss';

export interface BreadcrumbProps {
  children:
    | Array<React.ReactElement<ChildProps>>
    | React.ReactElement<ChildProps>;
  withoutTrailingSlash?: boolean;
}

export interface ChildProps {
  to?: string;
  href?: string;
}

const { map } = React.Children;
const mapper = (children: Array<React.ReactElement<ChildProps>> | React.ReactElement<ChildProps>) => (
  map(children, (child: React.ReactElement<ChildProps>, i: number) => (
    child && <li key={child.props.to || child.props.href}><child.type {...child.props} /></li>
  ))
);

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
  children,
  withoutTrailingSlash,
}) => (
  <ol className={Styles.breadcrumb}>
    {mapper(children)}
    {!withoutTrailingSlash && <li />}
  </ol>
);

Breadcrumb.defaultProps = {
  withoutTrailingSlash: false,
};

export default Breadcrumb;
