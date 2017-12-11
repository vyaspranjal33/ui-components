import React from 'react';
import cn from '../../utilities/classnames';

export interface SegmentTermTitleProps {
  justifyRight?: boolean;
  label: string;
  smallLabel?: string;
}

export const SegmentTermTitle: React.SFC<SegmentTermTitleProps> = ({ label, justifyRight, smallLabel }) => (
  <span className="segment-term-title">
    <strong className={cn({ 'segment-terms-or': justifyRight })}>{label}</strong>
    {smallLabel && <small>{smallLabel}</small>}
  </span>
);

SegmentTermTitle.defaultProps = {
  justifyRight: false,
  smallLabel: '',
};
