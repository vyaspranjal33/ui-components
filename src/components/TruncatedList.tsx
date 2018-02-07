import React from 'react';
import cn from '../utilities/classnames';

export interface TruncatedInlineListProps {
  items?: string[];
  limit?: number;
  className?: string;
  link?: string;
}

export interface TruncatedHTMLListProps {
  items?: object[];
  limit?: number;
  className?: string;
  link?: string;
  itemRenderer?: (item: object) => any;
  moreRenderer?: (truncatedCount: string, link: string) => any;
}

export const TruncatedInlineList: React.SFC<TruncatedInlineListProps> = ({
  items,
  limit = 3,
  className,
  link,
}) => {
  const shown = items.slice(0, limit);
  const truncated = items.slice(limit);
  const truncatedLength = truncated.length.toString();
  const shownText = shown.join(', ');
  return (
    <span className={cn(className)}>
      {shownText}
      {(truncated.length > 0) ? <span>, <abbr><a href={link}>+{truncatedLength} more</a></abbr></span> : ''}
    </span>
  );
};

export const TruncatedHTMLList: React.SFC<TruncatedHTMLListProps> = ({
  items,
  limit = 3,
  className,
  link,
  itemRenderer,
  moreRenderer,
}) => {
  const shown = items.slice(0, limit);
  const truncated = items.slice(limit);
  const truncatedLength = truncated.length.toString();
  const shownHTML = shown.map((item) => itemRenderer(item));
  const moreHTML = moreRenderer(truncatedLength, link);
  return(
    <div>
      {shownHTML}
      {moreHTML}
    </div>
  );
};

export default TruncatedInlineList;
