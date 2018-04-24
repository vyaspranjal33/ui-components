import React, { PureComponent } from 'react';
import { Button } from './button';
import { ButtonList } from './button-list';
import { Icon } from './icon';
import cn from './utilities/classnames';

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
  radios?: boolean;
  renderAlert?: () => React.ReactNode;
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
    radios: false,
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
          {
            onCancel &&
              <Button type="danger" small onClick={onCancel}>
                <Icon type="x" />
              </Button>
          }
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
      radios,
      renderAlert,
      renderInputs,
      title,
    } = this.props;

    return (
      <div className="segment-term-wrap">
        <p className="segment-term-title">
          {title}
        </p>
        <div
          className={cn('segment-term', {
            'has-alert': !!renderAlert,
            'has-radios': radios,
            'has-separator': hasSeparator,
            'is-editable': isEditing,
          })}
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
        {renderAlert && renderAlert()}
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
