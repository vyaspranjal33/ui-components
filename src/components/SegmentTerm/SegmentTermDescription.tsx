import React from 'react';

export interface SegmentTermDescription {
  label: string;
  queryName: string;
}

export const SegmentTermDescription: React.SFC<SegmentTermDescription> = ({
  label,
  queryName,
}) => (
  <span className="segment-term-description">
    {`${label} `}
    <strong>{queryName}</strong>
  </span>
);
