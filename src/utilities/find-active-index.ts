import { Children, ReactElement } from 'react';

const findActiveIndex = (components: Array<ReactElement<any>>): number => {
  const activeIndex = Children.map(
    components,
    (component: React.ReactElement<any>) => component.props.active,
  ).indexOf(true);

  if (activeIndex === -1) {
    return 0;
  }
  return activeIndex;
};

export default findActiveIndex;
