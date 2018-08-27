import React from 'react';
import Icon from '../icon';
import Styles from '../styles/color-palette.module.scss';
const AddSavedColorButton = ({ onClick }) => (React.createElement("button", { className: Styles['add-color-button'], onClick: onClick },
    React.createElement(Icon, { type: "plus" })));
export default AddSavedColorButton;
//# sourceMappingURL=addSavedColor.js.map