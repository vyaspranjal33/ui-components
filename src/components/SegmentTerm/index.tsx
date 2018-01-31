import React from 'react';

import cn from '../../utilities/classnames';
import { Button } from '../Button';
import { ButtonList } from '../ButtonList';
import { Icon } from '../Icon';

export interface SegmentTermProps {
  hasAddButton?: boolean;
  hasSeparator?: boolean;
  isEditable?: boolean;
  isEditing?: boolean;
  label?: string;
  onAddButtonClick?: (e: any) => void;
  onCancel?: (e: any) => void;
  onConfirm?: (e: any) => void;
  onEdit?: (e: any) => void;
  queryName?: string;
  renderInputs?: () => React.ReactNode;
  showConfirm?: boolean;
  title: string;
}

export const SegmentTerm: React.SFC<SegmentTermProps> = ({
  hasAddButton,
  hasSeparator,
  isEditable,
  isEditing,
  label,
  onAddButtonClick,
  onCancel,
  onConfirm,
  onEdit,
  queryName,
  renderInputs,
  showConfirm,
  title,
}) => (
  <div className="segment-term-wrap">
    <p className="segment-term-title">
      {title}
    </p>
    <div
      className={cn('segment-term', { 'has-separator': hasSeparator, 'is-editable': isEditing })}
      onClick={(isEditable && !isEditing) ? onEdit : undefined}
    >
    {isEditing && renderInputs && renderInputs()}
    {
      !isEditing &&
        <p>
          {`${label} `}
          <strong>{queryName}</strong>
        </p>
    }
    {
      isEditing ? (
        <ButtonList>
          {
            showConfirm &&
              <Button type="secondary" small onClick={onConfirm}>
                <Icon type="check-thin" />
              </Button>
          }
          <Button type="danger" small onClick={onCancel}>
            <Icon type="x" />
          </Button>
        </ButtonList>
      ) : (
        isEditable && <Icon type="pencil" className="segment-term-edit" />
      )
    }
    </div>
    {
      hasAddButton &&
        <ButtonList>
          <Button type="secondary" icon="plus" onClick={onAddButtonClick}>
            Add Condition
          </Button>
        </ButtonList>
    }
  </div>
);

SegmentTerm.defaultProps = {
  hasAddButton: false,
  hasSeparator: false,
  isEditable: false,
  isEditing: false,
};
