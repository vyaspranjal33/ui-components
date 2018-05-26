/// <reference types="react" />
import React from 'react';
import { CardProps } from '../card';
export interface CreateNewGroupCardProps extends CardProps {
    onClickCreate: (event: any) => void;
}
export declare const CreateNewGroupCard: React.SFC<CreateNewGroupCardProps>;
export default CreateNewGroupCard;
