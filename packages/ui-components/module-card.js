import React from 'react';
import Card from './card';
import Icon from './icon';
import cn from './utilities/classnames';
var iconTypes = {
    'button': 'button',
    'code': 'code',
    'columns': 'columns',
    'divider': 'divider',
    'image': 'images',
    'image-text': 'image-text',
    'social': 'social',
    'spacer': 'spacer',
    'text': 'text',
    'unsubscribe': 'unsubscribe',
};
var titles = {
    'button': 'Button',
    'code': 'Code',
    'columns': 'Columns',
    'divider': 'Divider',
    'image': 'Image',
    'image-text': 'Image & Text',
    'social': 'Social',
    'spacer': 'Spacer',
    'text': 'Text',
    'unsubscribe': 'Unsubscribe',
};
export var ModuleCard = function (_a) {
    var type = _a.type, className = _a.className;
    return (React.createElement(Card, { centered: true, thin: true, className: cn('card', 'is-module', className) },
        React.createElement("p", null,
            React.createElement(Icon, { type: iconTypes[type] }),
            titles[type])));
};
export default ModuleCard;
//# sourceMappingURL=module-card.js.map