import React from 'react';
import ModuleCardType from './types/module-card';
export interface ModuleCardProps {
    type: ModuleCardType;
    className?: string;
}
export declare const ModuleCard: React.SFC<ModuleCardProps>;
export default ModuleCard;
