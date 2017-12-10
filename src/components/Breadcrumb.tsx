import React from 'react';

export interface BreadcrumbProps {
  children:
    | Array<React.ReactElement<any>>
    | React.ReactElement<any>;
  withoutTrailingSlash?: boolean;
}

const { map } = React.Children;
const mapper = (children: Array<React.ReactElement<any>> | React.ReactElement<any>) => (
  map(children, (child: React.ReactElement<any>, i: number) => (
    child && <li key={i}><child.type {...child.props} /></li>
  ))
);

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
  children,
  withoutTrailingSlash,
}) => (
  <ol className="breadcrumb">
    {mapper(children)}
    {!withoutTrailingSlash && <li />}
  </ol>
);

Breadcrumb.defaultProps = {
  withoutTrailingSlash: false,
};

export default Breadcrumb;
