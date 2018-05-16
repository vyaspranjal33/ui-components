import React from 'react';
import Styles from './styles/tabs.module.scss';
import cn from './utilities/classnames';
import findActiveIndex from './utilities/find-active-index';

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
      className={cn(Styles.tab, {
        [Styles['is-active']]: active,
      })}
      onClick={handleClick}
    >
      {children} {number && <span className={Styles['tab-number']}>{number}</span>}
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
      className={cn(Styles['tab-wrapper'], {
        [Styles['is-centered']]: centered,
        [Styles['zero-border']]: zeroBorder,
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
  public state = {
    activeIndex: findActiveIndex(this.props.children),
  };

  public handleChange = (event: any, label: string, index: number) => {
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
