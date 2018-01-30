import React from 'react';
import cn from '../../utilities/classnames';

export interface SegmentTermTitleProps {
  children: React.ReactNode;
}

export const SegmentTermTitle: React.SFC<SegmentTermTitleProps> = ({ children }) => (
  <p className="segment-term-title">
    {children}
  </p>
);
