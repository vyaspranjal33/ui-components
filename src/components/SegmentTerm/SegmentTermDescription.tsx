import React from 'react';

export interface SegmentTermDescription {
  label: string;
  strongText: string;
}

export const SegmentTermDescription: React.SFC<SegmentTermDescription> = ({
  label,
  strongText,
}) => (
  <span className="segment-term-description">
    {`${label} `}
    <strong>{strongText}</strong>
  </span>
);
