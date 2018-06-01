import React, { Fragment } from 'react';

import Breadcrumb from '../breadcrumb';
import { Button } from '../button';
import { ButtonList } from '../button-list';
import { Card } from '../card';
import { CenterModal } from '../center-modal';
import { Checkbox } from '../checkbox';
import { Icon } from '../icon';
import { StatefulTextInput } from '../text-input';
import { Tooltip } from '../tooltip';

import cn from '../utilities/classnames';

export interface UnsubscribeGroupAddEditProps {
  breadcrumbHref?: string;
  className?: string;
  id?: number;
  isDeleteGroupModalOpen?: boolean;
  isEdit?: boolean;
  isGroupDisplayedOnIndex?: boolean;
  onDeleteGroupModalClosed?: (e: any) => void;
  onDeleteGroupModalOpened?: (e: any) => void;
  onGroupDescInputChanged: () => void;
  onGroupDisplayedOnIndexChanged: () => void;
  onGroupNameInputChanged: () => void;
  onDeleteUnsubscribeGroup?: () => void;
  onSaveUnsubscribeGroup: () => void;
  unsubscribes?: number;
}

export const UnsubscribeGroupAddEdit: React.SFC<UnsubscribeGroupAddEditProps> = ({
  className,
  breadcrumbHref,
  id,
  isDeleteGroupModalOpen,
  isEdit,
  isGroupDisplayedOnIndex,
  onDeleteGroupModalClosed,
  onDeleteGroupModalOpened,
  onGroupDescInputChanged,
  onGroupDisplayedOnIndexChanged,
  onGroupNameInputChanged,
  onDeleteUnsubscribeGroup,
  onSaveUnsubscribeGroup,
  unsubscribes,
  ...attributes,
}) => {

  return (
    <div
      className="row"
      id="unsub-groups"
      {...attributes}
    >
      <div className="col-5 unsub-group-add-panel">
        <header className="content-header">
          <Breadcrumb>
            <a href="#{breadcrumbHref}">Unsubscribe Groups</a>
          </Breadcrumb>
          <h1>{isEdit ? 'Edit Group' : 'Add New Group'}</h1>
        </header>
        <p className="small">
          <strong>
            Unsubscribe groups allow recipients to opt out of different types of campaigns you send.
          </strong>
        </p>
        {
          isEdit &&
          <Card
            inline
            thin
          >
            <span className="small">
              <strong>Unsubscribes </strong>
              {unsubscribes}
            </span>
            <span className="small">
              <strong>ID </strong>
              {id}
            </span>
          </Card>
        }
        <div className="input-text-wrap is-required has-value">
          <StatefulTextInput
            type="text"
            label="Group Name"
            id="input-text-group-name"
            onChange={onGroupNameInputChanged}
            info="This will be displayed to your recipients when opting out."
          />
        </div>
        <div className="input-text-wrap is-required has-value">
          <StatefulTextInput
            type="text"
            label="Group Description"
            id="input-text-group-desc"
            onChange={onGroupDescInputChanged}
            info="This will be displayed to your recipients when opting out."
          />
        </div>
        <div className="input-checkbox-wrap">
          <Checkbox
            checked={isGroupDisplayedOnIndex}
            id="checkbox-display-unsubscribe-group"
            label={
              <Fragment>
                Display this group on your unsubscribe preferences page.
                <Tooltip
                  length="large"
                  content={
                    `Clicking the Unsubscribe Preferences link will take
                    recipients to a page that displays all unsubscribe groups
                    you've chosen to include. You can preview this page at right
                    by clicking the "Unsubscribe Preferences" tab`
                  }
                >
                  <Icon type="info-circle" />
                </Tooltip>
              </Fragment>
            }
            onChange={onGroupDisplayedOnIndexChanged}
          />
        </div>
        <ButtonList>
          {
            isEdit &&
            <Button
              type="danger"
              onClick={onDeleteGroupModalOpened}
            >
              Delete Group
            </Button>
          }
          <Button
            type="primary"
            onClick={onSaveUnsubscribeGroup}
          >
            Save Unsubscribe Group
          </Button>
        </ButtonList>
      </div>
      <CenterModal
        onClose={onDeleteGroupModalClosed}
        open={isDeleteGroupModalOpen}
        renderBody={
          <p>Are you sure you want to delete this unsubscribe group?</p>
        }
        renderFooter={(close: (e: any) => void) => (
          <ButtonList>
            <Button
              small
              type="secondary"
              onClick={onDeleteGroupModalClosed}
            >
              Cancel
            </Button>
            <Button
              small
              type="danger"
              onClick={onDeleteUnsubscribeGroup}
            >
              Delete
            </Button>
          </ButtonList>
        )}
      />
    </div>
  );
};

export default UnsubscribeGroupAddEdit;
