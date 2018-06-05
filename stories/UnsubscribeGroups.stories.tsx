import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import UnsubscribeGroupCard from '../src/unsubscribe-groups/unsubscribe-group-card';
import CreateNewGroupCard from '../src/unsubscribe-groups/create-new-group-card';

const stories = storiesOf('UnsubscribeGroupCard', module);

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
      <CreateNewGroupCard onClickCreate={action('create new group')}/>
    </div>
  </div>
));

stories.add('Create New Group Card (disabled)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <CreateNewGroupCard onClickCreate={action('create new group')} disabled/>
    </div>
  </div>
));

