import React from 'react';

import cn from '../../utilities/classnames';
import { Button } from '../Button';
import { ButtonList } from '../ButtonList';
import { Icon } from '../Icon';
export { SegmentTermControls } from './SegmentTermControls';
export { SegmentTermDescription } from './SegmentTermDescription';
export { SegmentTermTitle } from './SegmentTermTitle';

export interface SegmentTermWrapProps {
  children: React.ReactNode;
}

export const SegmentTermWrap: React.SFC<SegmentTermWrapProps> = ({ children }) => (
  <div className="segment-term-wrap">
    {children}
  </div>
);

export interface SegmentTermProps {
  children: React.ReactNode;
  hasSeparator?: boolean;
  isEditing?: boolean;
}

export interface SegmentTermAddButtonProps {
  onClick: () => void;
}

export const SegmentTermAddButton: React.SFC<SegmentTermAddButtonProps> = ({ onClick }) => (
  <ButtonList>
    <Button type="secondary" icon="plus" onClick={onClick}>
      Add Condition
    </Button>
  </ButtonList>
);

export const SegmentTerm: React.SFC<SegmentTermProps> = ({ children, hasSeparator, isEditing }) => (
  <div className={cn('segment-term', { 'has-separator': hasSeparator, 'is-editable': isEditing })}>
    {children}
  </div>
);

SegmentTerm.defaultProps = {
  hasSeparator: false,
  isEditing: false,
};
