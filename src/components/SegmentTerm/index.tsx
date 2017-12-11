import React from 'react';

import cn from '../../utilities/classnames';
import { Icon } from '../Icon';
export { SegmentTermControls } from './SegmentTermControls';
export { SegmentTermDescription } from './SegmentTermDescription';
export { SegmentTermTitle } from './SegmentTermTitle';

export interface SegmentTermWrapProps {
  children: React.ReactNode;
}

export const SegmentTermWrap: React.SFC<SegmentTermWrapProps> = ({ children }) => (
  <section className="segment-term-wrap">
    {children}
  </section>
);

export interface SegmentTermProps {
  children: React.ReactNode;
  hasSeparator?: boolean;
  isEditing?: boolean;
  onCreateChip?: (e: any) => void;
}

export const SegmentTerm: React.SFC<SegmentTermProps> = ({ children, hasSeparator, isEditing, onCreateChip }) => (
  <span className={cn('segment-term', { 'has-separator': hasSeparator })}>
    <section className={cn('segment-term-inputs', { 'is-editable': isEditing })}>
      {children}
    </section>
    {
      !hasSeparator &&
        <Icon type="create" onClick={isEditing ? undefined : onCreateChip} />
    }
  </span>
);

SegmentTerm.defaultProps = {
  hasSeparator: false,
  isEditing: false,
};
