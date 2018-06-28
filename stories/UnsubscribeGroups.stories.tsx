import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import
UnsubscribeGroupCard,
{
  CreateNewGroupCard,
  UnsubscribeGroupAddEdit
} from '../src/unsubscribe-groups/';

const stories = storiesOf('Unsubscribe Groups', module);

stories.add('Unsubscribe Group Card', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <UnsubscribeGroupCard
        id={1234}
        name="Special Offers"
        description="The easiest way to send email. It only requires modifying your application’s SMTP configuration."
        unsubscribes={1000}
        onClickEdit={action('edit')}
        onClickPreview={action('preview')}
        onClickUploadCsv={action('upload csv')}
        onClickExport={action('export')}
        onClickManuallyAdd={action('manual add')}
      />
    </div>
  </div>
));

stories.add('Unsubscribe Group Card (isDisplayedOnPreferencesPage)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <UnsubscribeGroupCard
        id={5678}
        name="Special Offers"
        description="The easiest way to send email. It only requires modifying your application’s SMTP configuration."
        unsubscribes={0}
        isDisplayedOnPreferencesPage
        onClickEdit={action('edit')}
        onClickPreview={action('preview')}
        onClickUploadCsv={action('upload csv')}
        onClickExport={action('export')}
        onClickManuallyAdd={action('manual add')}
      />
    </div>
  </div>
));

stories.add('Create New Group Card', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <CreateNewGroupCard onClickCreate={action('create new group')} />
    </div>
  </div>
));

stories.add('Create New Group Card (disabled)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <CreateNewGroupCard onClickCreate={action('create new group')} disabled />
    </div>
  </div>
));

stories.add('Add Unsubscribe Group', () => (
  <UnsubscribeGroupAddEdit
    breadcrumbHref="#"
    groupDescription="Learn when we're coming to a city near you"
    groupName="Event Announcements"
    onGroupDescriptionInputChanged={action('change group description')}
    onGroupDisplayedOnIndexChanged={action('toggle group displayed on index')}
    onGroupNameInputChanged={action('change group name')}
    onSaveUnsubscribeGroup={action('save unsubscribe group')}
  />
));

type UnsubscribeGroupEditContainerState = { isDeleteGroupModalOpen: boolean };
class UnsubscribeGroupEditContainer extends Component<any, any> {
  state: UnsubscribeGroupEditContainerState;

  constructor(props: any) {
    super(props);

    this.state = { isDeleteGroupModalOpen: false };
  }

  public open = (e: any) => { this.setState({ isDeleteGroupModalOpen: true }); };
  public close = (e: any) => { this.setState({ isDeleteGroupModalOpen: false }); };

  public render() {
    return (
      <UnsubscribeGroupAddEdit
        breadcrumbHref="#"
        groupDescription="Learn when we're coming to a city near you"
        groupName="Event Announcements"
        id={1234}
        isEdit
        onGroupDescriptionInputChanged={action('change group description')}
        onGroupDisplayedOnIndexChanged={action('toggle group displayed on index')}
        onGroupNameInputChanged={action('change group name')}
        onDeleteUnsubscribeGroup={action('delete unsubscribe group')}
        onSaveUnsubscribeGroup={action('save unsubscribe group')}
        isDeleteGroupModalOpen={this.state.isDeleteGroupModalOpen}
        onDeleteGroupModalClosed={this.close}
        onDeleteGroupModalOpened={this.open}
        unsubscribes={1000}
      />
    );
  }
}

stories.add('Edit Unsubscribe Group', () => (
  <UnsubscribeGroupEditContainer />
));
