import React, { PureComponent } from 'react';

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

export class SegmentTerm extends PureComponent<SegmentTermProps> {
  public static defaultProps = {
    hasAddButton: false,
    hasSeparator: false,
    isEditable: false,
    isEditing: false,
  };

  public get termControls(): React.ReactNode {
    const { isEditable, isEditing, onCancel, onConfirm, showConfirm } = this.props;

    if (isEditing) {
      return (
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
      );
    }

    if (isEditable) {
      return <Icon type="pencil" className="segment-term-edit" />;
    }

    return null;
  }

  public render() {
    const {
      hasAddButton,
      hasSeparator,
      isEditable,
      isEditing,
      label,
      onAddButtonClick,
      onEdit,
      queryName,
      renderInputs,
      title,
    } = this.props;

    return (
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
        {this.termControls}
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
  }
}
