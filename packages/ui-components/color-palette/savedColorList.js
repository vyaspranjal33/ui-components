import React from 'react';
import cn from '../utilities/classnames';
import AddSavedColorButton from './addSavedColor';
import ColorSwatch from './colorSwatch';
import Styles from '../styles/color-palette.module.scss';
const SavedColorList = ({ colors = [], addColor, removeColor, onChange, }) => {
    const handleRemoveColor = (key) => (event) => removeColor(event, key);
    return (React.createElement("section", { className: cn('SavedColorList', Styles['saved-color-list']) },
        colors.map(({ key, color }) => (React.createElement(ColorSwatch, { color: color, storageKey: key, removeColor: handleRemoveColor(key), onClick: onChange, key: key }))),
        React.createElement(AddSavedColorButton, { onClick: addColor })));
};
export default SavedColorList;
//# sourceMappingURL=savedColorList.js.map