/// <reference types="react" />
import { PureComponent } from 'react';
export interface CSVUploadProps {
    onChange: (event: any) => void;
    onRemove?: (event: any) => void;
}
declare class CSVUpload extends PureComponent<CSVUploadProps> {
    handleRemove: (callback: (event: any) => void) => (event: any) => void;
    render(): JSX.Element;
}
export default CSVUpload;
