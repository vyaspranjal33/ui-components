import React, { Fragment } from 'react';
import Dropzone from './dropzone';
import FileUpload, { DroppedFile, FileSelect } from './file-upload';
const CSVUpload = () => (React.createElement(FileUpload, { render: ({ hasFile, hovered, invalid, file, handleRemove, FileSelectLink, }) => (React.createElement(Dropzone, { active: hasFile, hovered: hovered, invalid: invalid }, file ? (React.createElement(DroppedFile, { file: file, onRemove: handleRemove })) : (React.createElement(FileSelect, null,
        React.createElement(Fragment, null,
            "Drag and drop your CSV file here or",
            ' ',
            React.createElement(FileSelectLink, null, "select a CSV file to upload"),
            "."))))), supportedType: 'text/csv' }));
export default CSVUpload;
//# sourceMappingURL=csv-upload.js.map