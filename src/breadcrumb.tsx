import React from 'react';
import cn from './utilities/classnames';

export interface BreadcrumbProps {
  children:
    | Array<React.ReactElement<ChildProps>>
    | React.ReactElement<ChildProps>;
  withoutTrailingSlash?: boolean;
  className?: string;
}

export interface ChildProps {
  to?: string;
  href?: string;
}

const { map } = React.Children;
const mapper = (
  children:
    | Array<React.ReactElement<ChildProps>>
    | React.ReactElement<ChildProps>
) =>
  map(
    children,
    (child: React.ReactElement<ChildProps>, i: number) =>
      child && (
        <li key={child.props.to || child.props.href}>
          <child.type {...child.props} />
        </li>
      )
  );

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
  children,
  withoutTrailingSlash,
  className,
  ...attributes
}) => (
  <ol className={cn('breadcrumb', className)} {...attributes}>
    {mapper(children)}
    {!withoutTrailingSlash && <li />}
  </ol>
);

Breadcrumb.defaultProps = {
  withoutTrailingSlash: false,
};

export default Breadcrumb;
