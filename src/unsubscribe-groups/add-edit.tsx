import React, { Fragment } from 'react';

import Breadcrumb from '../breadcrumbs/breadcrumb';
import { ButtonList } from '../button-list/button-list';
import { Button } from '../buttons/button';
import { Card } from '../cards/card';
import { Checkbox } from '../checkboxes/checkbox';
import { ConfirmationModal } from '../confirmation-modal/confirmation-modal';
import { Icon } from '../icon';
import { TextInput } from '../text-input';
import { Tooltip } from '../tooltip';

import cn from '../utilities/classnames';

export interface UnsubscribeGroupAddEditProps {
  breadcrumbHref?: string;
  className?: string;
  groupDescription: string;
  groupName: string;
  id?: number;
  isDeleteGroupModalOpen?: boolean;
  isEdit?: boolean;
  isGroupDisplayedOnIndex?: boolean;
  onDeleteGroupModalClosed?: (e: any) => void;
  onDeleteGroupModalOpened?: (e: any) => void;
  onGroupDescriptionInputChanged: () => void;
  onGroupDisplayedOnIndexChanged: () => void;
  onGroupNameInputChanged: () => void;
  onDeleteUnsubscribeGroup?: () => void;
  onSaveUnsubscribeGroup: () => void;
  unsubscribes?: number;
}

export const UnsubscribeGroupAddEdit: React.SFC<
  UnsubscribeGroupAddEditProps
> = ({
  className,
  breadcrumbHref,
  groupDescription,
  groupName,
  id,
  isDeleteGroupModalOpen,
  isEdit,
  isGroupDisplayedOnIndex,
  onDeleteGroupModalClosed,
  onDeleteGroupModalOpened,
  onGroupDescriptionInputChanged,
  onGroupDisplayedOnIndexChanged,
  onGroupNameInputChanged,
  onDeleteUnsubscribeGroup,
  onSaveUnsubscribeGroup,
  unsubscribes,
  ...attributes
}) => {
  return (
    <div id="unsubcribe-groups" {...attributes}>
      <div className="unsubcribe-group-add-edit-panel">
        <header className="content-header">
          <Breadcrumb>
            <a href={breadcrumbHref}>Unsubscribe Groups</a>
          </Breadcrumb>
          <h1>{isEdit ? 'Edit Group' : 'Add New Group'}</h1>
        </header>
        <p className="small">
          <strong>
            Unsubscribe groups allow recipients to opt out of different types of
            campaigns you send.
          </strong>
        </p>
        {isEdit && (
          <Card inline thin>
            <span className="small">
              <strong>Unsubscribes </strong>
              {unsubscribes}
            </span>
            <span className="small">
              <strong>ID </strong>
              {id}
            </span>
          </Card>
        )}
        <TextInput
          type="text"
          label="Group Name"
          id="input-text-group-name"
          isRequired
          value={groupName}
          onChange={onGroupNameInputChanged}
          info="This will be displayed to your recipients when opting out."
        />
        <TextInput
          type="text"
          label="Group Description"
          id="input-text-group-desc"
          isRequired
          value={groupDescription}
          onChange={onGroupDescriptionInputChanged}
          info="This will be displayed to your recipients when opting out."
        />
        <div className="input-checkbox-wrap">
          <Checkbox
            checked={isGroupDisplayedOnIndex}
            id="checkbox-display-unsubscribe-group"
            label="Display this group on your unsubscribe preferences page."
            onChange={onGroupDisplayedOnIndexChanged}
          />
          <Tooltip
            className="unsubscribe-group-index-display-tooltip"
            length="large"
            content={`Clicking the Unsubscribe Preferences link will take
              recipients to a page that displays all unsubscribe groups
              you've chosen to include. You can preview this page at right
              by clicking the "Unsubscribe Preferences" tab`}
          >
            <Icon type="info-circle" />
          </Tooltip>
        </div>
        <ButtonList>
          {isEdit && (
            <Button type="danger" onClick={onDeleteGroupModalOpened}>
              Delete Group
            </Button>
          )}
          <Button type="primary" onClick={onSaveUnsubscribeGroup}>
            Save Unsubscribe Group
          </Button>
        </ButtonList>
      </div>
      <ConfirmationModal
        isOpen={isDeleteGroupModalOpen}
        renderActions={() => (
          <Fragment>
            <Button small type="secondary" onClick={onDeleteGroupModalClosed}>
              Cancel
            </Button>
            <Button small type="danger" onClick={onDeleteUnsubscribeGroup}>
              Delete
            </Button>
          </Fragment>
        )}
        renderBody={() => (
          <p className="small">
            Warning: After deleting this group, recipients that unsubscribe from
            emails previously associated with this group will be globally
            unsubscribed because the group no longer exists.
          </p>
        )}
        renderHeader={'Are you sure you want to delete this unsubscribe group?'}
      />
    </div>
  );
};

export default UnsubscribeGroupAddEdit;
