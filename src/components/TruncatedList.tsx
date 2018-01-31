import React from 'react';
import cn from '../utilities/classnames';

export interface TruncatedListProps {
  list?: Array<string>;
  limit?: number;
  className?: string;
}

export const TruncatedList: React.SFC<TruncatedListProps> = ({
  list,
  limit = 3,
  className,
}) => {
  const shown = list.slice(0, limit);
  const truncated = list.slice(limit);
  const shownContent = shown.join(", ");
  const truncatedLength = truncated.length.toString();

  return (
    <span className={cn(className)}>
      {shownContent}{(truncated.length > 0) ? <span>, <abbr><a href='#'>+{truncatedLength} more</a></abbr></span> : ''}
    </span>
  );
};

export default TruncatedList;
