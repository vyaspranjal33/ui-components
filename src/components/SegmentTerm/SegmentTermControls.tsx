import React, { Fragment } from 'react';

import { Button } from '../Button';
import { ButtonList } from '../ButtonList';
import { Icon } from '../Icon';

export interface SegmentTermControlsProps {
  isEditable?: boolean;
  isEditing?: boolean;
  showConfirm?: boolean;
  onConfirm?: (e: any) => void;
  onCancel?: (e: any) => void;
  onEdit?: (e: any) => void;
}

export const SegmentTermControls: React.SFC<SegmentTermControlsProps> = ({
  isEditable,
  isEditing,
  showConfirm,
  onConfirm,
  onCancel,
  onEdit,
}) => (
  isEditing ? (
    <ButtonList>
      {
        showConfirm &&
          <Button type="secondary" small onClick={onConfirm}>
            <Icon type="check" />
          </Button>
      }
      <Icon type="x" onClick={onCancel} />
    </ButtonList>
  ) : (
   isEditable && <Icon type="pencil" className="segment-term-inputs-edit" onClick={onEdit} />
  )
);

SegmentTermControls.defaultProps = {
  isEditable: false,
  isEditing: false,
  showConfirm: false,
};

export default SegmentTermControls;
