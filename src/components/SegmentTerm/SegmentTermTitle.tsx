import React from 'react';
import cn from '../../utilities/classnames';

export type SegmentTermTitleJustify =
  | 'right'
  | 'left';

export interface SegmentTermTitleProps {
  justify?: SegmentTermTitleJustify;
  label: string;
  smallLabel?: string;
}

export const SegmentTermTitle: React.SFC<SegmentTermTitleProps> = ({ label, justify, smallLabel }) => (
  <span className="segment-term-title">
    <strong className={cn({ 'segment-terms-or': justify === 'right' })}>{label}</strong>
    {smallLabel && <small>{smallLabel}</small>}
  </span>
);

SegmentTermTitle.defaultProps = {
  justify: 'left',
  smallLabel: '',
};
