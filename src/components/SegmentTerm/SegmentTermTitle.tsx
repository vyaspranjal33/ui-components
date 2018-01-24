import React from 'react';
import cn = require( '../../utilities/classnames');

export type SegmentTermTitleJustify =
  | 'right'
  | 'left';

export interface SegmentTermTitleProps {
  justify?: SegmentTermTitleJustify;
  label: string;
  secondaryLabel?: string;
}

export const SegmentTermTitle: React.SFC<SegmentTermTitleProps> = ({ label, justify, secondaryLabel }) => (
  <span className="segment-term-title">
    <strong className={cn({ 'segment-terms-or': justify === 'right' })}>{label}</strong>
    {secondaryLabel && <small>{secondaryLabel}</small>}
  </span>
);

SegmentTermTitle.defaultProps = {
  justify: 'left',
  secondaryLabel: '',
};
