import React from 'react';

export interface SegmentTermDescription {
  label: string;
  queryName: string;
}

export const SegmentTermDescription: React.SFC<SegmentTermDescription> = ({
  label,
  queryName,
}) => (
  <p>
    {`${label} `}
    <strong>{queryName}</strong>
  </p>
);
