import React from 'react';

import Button from '../button';
import Card, { CardProps } from '../card';

import cn from '../utilities/classnames';

export interface CreateNewGroupCardProps extends CardProps {
  onClickCreate: (event: any) => void;
}

export const CreateNewGroupCard: React.SFC<CreateNewGroupCardProps> = ({
  className,
  onClickCreate: handleCreate,
  ...attributes,
}) => {

  return (
    <Card
      centered
      title="Create New Group"
      body="Create a new group that represents a common type of email you send."
      className={className}
      {...attributes}
    >
      <Button type="primary" onClick={handleCreate}>
        Create New Group
      </Button>
    </Card>
  );
};

export default CreateNewGroupCard;
