import React, { Fragment } from 'react';
import BlankTemplateImage from './BlankTemplateImage';
import { Button } from './button';
import { ButtonList } from './button-list';
import Icon from './icon';
import Styles from './styles/template-card.module.scss';
import { IconType } from './types/icons';
import cn from './utilities/classnames';
export enum EditorType {
  Code = 'code',
  Design = 'design',
}

export const EditorBadge: React.SFC<{
  type: EditorType;
  codeCopy?: string;
  codeIcon?: IconType;
  designCopy?: string;
  designIcon?: IconType;
}> = props => {
  let iconType = null;
  let editorCopy = null;

  if (props.type === EditorType.Code) {
    iconType = props.codeIcon || 'editor-code';
    editorCopy = props.codeCopy || 'Code Editor';
  } else if (props.type === EditorType.Design) {
    iconType = props.designIcon || 'editor-design';
    editorCopy = props.designCopy || 'Design Editor';
  }

  return props.type ? (
    <p className={cn('editor-type', Styles['editor-type'])}>
      {iconType && <Icon type={iconType as IconType} />}
      {editorCopy}
    </p>
  ) : null;
};
export interface TemplateCardProps {
  label?: string;
  className?: string;
  blank?: boolean;
  thumbnailUrl?: string;
  editorInfo?: any;
  name: string;
  onSelect: (id: string) => void;
  templateId: string;
}

export const TemplateCard: React.SFC<TemplateCardProps> = ({
  children,
  className,
  blank = false,
  thumbnailUrl = '',
  editorInfo = '',
  name,
  templateId,
  onSelect,
  ...attributes
}) => {
  const selectItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(templateId);
  };

  return (
    <div
      className={cn('template-wrap', Styles['template-wrap'], className)}
      {...attributes}
    >
      <div
        className={cn(
          'thumb',
          Styles.thumb,
          blank ? ['is-blank', Styles['is-blank']] : ''
        )}
      >
        {!blank ? (
          <img src={thumbnailUrl} alt="Template Image" />
        ) : (
          BlankTemplateImage
        )}
        {children}
        <ButtonList className={cn('btn-list', Styles['btn-list'])}>
          <Button onClick={selectItem}>Select</Button>
        </ButtonList>
      </div>
      <p className="is-size-h4">{name}</p>
      {typeof editorInfo === 'string' ? (
        <EditorBadge type={editorInfo as EditorType} />
      ) : (
        <div className={cn('editor-type', Styles['editor-type'])}>
          {editorInfo}
        </div>
      )}
    </div>
  );
};

export default TemplateCard;
