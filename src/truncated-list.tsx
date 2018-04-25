import React from 'react';
import cn from './utilities/classnames';

export interface TruncatedListProps {
  items: string[] | object [];
  limit?: number;
  className?: string;
  link?: string;
  renderItems?: (item: any[]) => JSX.Element;
  renderMore?: (truncatedCount: string, link: string) => JSX.Element;
}

export const TruncatedList: React.SFC<TruncatedListProps> = ({
  items,
  limit = 3,
  className,
  link,
  renderItems,
  renderMore,
}) => {
  const shown = items.slice(0, limit);
  const shownText = shown.join(', ');
  const truncated = items.slice(limit);
  const numberOfAdditionalItems = truncated.length;
  const hasAdditionalItems = numberOfAdditionalItems > 0;
  const additionalItemText = (
    <span>
      ,{' '}
      <abbr>
        <a href={link}>+{numberOfAdditionalItems} more</a>
      </abbr>
    </span>
  );

  return (
    <span className={className}>
      {renderItems ? renderItems(shown) : shownText}
      {renderMore && renderMore(numberOfAdditionalItems.toString(), link)}
      {!renderMore && hasAdditionalItems && additionalItemText}
    </span>
  );
};

export default TruncatedList;
