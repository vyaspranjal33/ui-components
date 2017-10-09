import * as cn from 'classnames';
import * as React from 'react';
import findActiveIndex from '../utilities/find-active-index';

const { map } = React.Children;

export interface TabProps {
  active?: boolean;
  children: string;
  number?: number;
  onClick?: (event: any) => void;
  index?: number;
}

export const Tab: React.SFC<TabProps> = ({
  active,
  children,
  onClick: handleClick,
  number,
}) => {
  return (
    <li
      className={cn('tab', {
        'is-active': active,
      })}
      onClick={handleClick}
    >
      {children} {number && <span className="tab-number">{number}</span>}
    </li>
  );
};

Tab.defaultProps = {
  active: false,
};

export interface TabsProps {
  centered?: boolean;
  zeroBorder?: boolean;
  children: any;
  onChange: (event: any, label: string, index: number) => void;
}

export const Tabs: React.SFC<any> = ({
  centered,
  children,
  zeroBorder,
  onChange,
}) => {
  return (
    <ul
      className={cn('tab-wrapper', {
        'is-centered': centered,
        'zero-border': zeroBorder,
      })}
    >
      {map(children, (tab: React.ReactElement<any>, index) => {
        return React.cloneElement(tab, {
          onClick(event: any) {
            const { children: label, onClick } = tab.props;
            onClick(event);
            onChange(event, label, index);
          },
        });
      })}
    </ul>
  );
};

export class StatefulTabs extends React.Component<TabsProps, any> {
  constructor(props: TabsProps) {
    super();

    const activeIndex = findActiveIndex(props.children);

    this.state = {
      activeIndex,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: any, label: string, index: number) {
    const { onChange: handleChange } = this.props;
    this.setState(
      {
        activeIndex: index,
      },
      () => {
        handleChange(event, label, index);
      },
    );
  }

  public render() {
    const { activeIndex } = this.state;
    const tabs = map(
      this.props.children,
      (tab: React.ReactElement<any>, index: number) => {
        return React.cloneElement(tab, {
          active: index === activeIndex,
        });
      },
    );
    return (
      <Tabs {...this.props} onChange={this.handleChange}>
        {tabs}
      </Tabs>
    );
  }
}

export default Tabs;
