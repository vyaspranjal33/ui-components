import React, { PureComponent } from 'react';
import { Button } from './button';
import { ButtonList } from './button-list';
import { Icon } from './icon';
import cn from './utilities/classnames';

export interface SegmentTermProps {
  editable?: boolean;
  editing?: boolean;
  hasAddButton?: boolean;
  hasSeparator?: boolean;
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
  className?: string;
}

export class SegmentTerm extends PureComponent<SegmentTermProps> {
  public static defaultProps = {
    editable: false,
    editing: false,
    hasAddButton: false,
    hasSeparator: false,
    radios: false,
  };

  public get termControls(): React.ReactNode {
    const {
      editable,
      editing,
      onCancel,
      onConfirm,
      showConfirm,
      ...attributes
    } = this.props;

    if (editing) {
      return (
        <ButtonList>
          {showConfirm && (
            <Button type="secondary" small onClick={onConfirm}>
              <Icon type="check-thin" />
            </Button>
          )}
          {onCancel && (
            <Button type="danger" small onClick={onCancel}>
              <Icon type="x" />
            </Button>
          )}
        </ButtonList>
      );
    }

    if (editable) {
      return <Icon type="pencil" className="segment-term-edit" />;
    }

    return null;
  }

  public render() {
    const {
      hasAddButton,
      hasSeparator,
      editable,
      editing,
      label,
      onAddButtonClick,
      onEdit,
      queryName,
      radios,
      renderAlert,
      renderInputs,
      title,
      onCancel,
      onConfirm,
      showConfirm,
      className,
      ...attributes
    } = this.props;

    return (
      <div className={cn('segment-term-wrap', className)} {...attributes}>
        <p className="segment-term-title">{title}</p>
        <div
          className={cn('segment-term', {
            'has-alert': !!renderAlert,
            'has-radios': radios,
            'has-separator': hasSeparator,
            'is-editable': editing,
          })}
          onClick={editable && !editing ? onEdit : undefined}
        >
          {editing && renderInputs && renderInputs()}
          {!editing && (
            <p>
              {`${label} `}
              <strong>{queryName}</strong>
            </p>
          )}
          {this.termControls}
          {renderAlert && renderAlert()}
        </div>
        {hasAddButton && (
          <ButtonList>
            <Button type="secondary" icon="plus" onClick={onAddButtonClick}>
              Add Condition
            </Button>
          </ButtonList>
        )}
      </div>
    );
  }
}
