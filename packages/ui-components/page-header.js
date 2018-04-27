import React from 'react';
const headerStyle = {
    marginTop: 10,
};
const headingStyle = {
    color: '#294661',
    fontFamily: 'Colfax,Proxima Nova,Helvetica,sans-serif',
    fontWeight: 300,
};
export const PageHeader = ({ children }) => (React.createElement("header", null, children));
export const PageHeading = ({ children, title }) => (React.createElement("div", { className: "content-header", style: headerStyle },
    React.createElement("h1", { style: headingStyle }, title),
    children && React.createElement("div", { className: "btn-list" }, children)));
PageHeading.defaultProps = {
    title: '',
};
export default PageHeader;
//# sourceMappingURL=page-header.js.map