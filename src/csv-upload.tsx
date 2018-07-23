import React, { Fragment } from 'react';

import Dropzone from './dropzone';
import FileUpload, { DroppedFile, FileSelect } from './file-upload';

export interface CSVUploadProps {
  onChange: (event: any) => void;
}

const CSVUpload: React.SFC<CSVUploadProps> = ({ onChange, onRemove }) => (
  <FileUpload
    onFileSelect={onChange}
    render={({ hasFile, hovered, invalid, file, FileSelectLink }) => (
      <Dropzone active={hasFile} hovered={hovered} invalid={invalid}>
        {file ? (
          <DroppedFile file={file} onRemove={onRemove} />
        ) : (
          <FileSelect>
            <Fragment>
              Drag and drop your CSV file here or{' '}
              <FileSelectLink>select a CSV file to upload</FileSelectLink>.
            </Fragment>
          </FileSelect>
        )}
      </Dropzone>
    )}
    supportedType={'text/csv'}
  />
);

export default CSVUpload;
