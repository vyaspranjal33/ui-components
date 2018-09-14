import React from 'react';

import Button from '../buttons/button';
import Card, { CardProps } from '../cards/card';

import cn from '../utilities/classnames';

export interface CreateNewGroupCardProps extends CardProps {
  disabled?: boolean;
  onClickCreate: (event: any) => void;
}

export const CreateNewGroupCard: React.SFC<CreateNewGroupCardProps> = ({
  className,
  disabled,
  onClickCreate: handleCreate,
  ...attributes
}) => {
  return (
    <Card
      centered
      title="Create New Group"
      body="Create a new group that represents a common type of email you send."
      className={className}
      {...attributes}
    >
      <Button type="primary" onClick={handleCreate} disabled={disabled}>
        Create New Group
      </Button>
    </Card>
  );
};

export default CreateNewGroupCard;
