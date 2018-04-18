import React from 'react';
var headerStyle = {
    marginTop: 10,
};
var headingStyle = {
    color: '#294661',
    fontFamily: 'Colfax,Proxima Nova,Helvetica,sans-serif',
    fontWeight: 300,
};
export var PageHeader = function (_a) {
    var children = _a.children;
    return (React.createElement("header", null, children));
};
export var PageHeading = function (_a) {
    var children = _a.children, title = _a.title;
    return (React.createElement("div", { className: "content-header", style: headerStyle },
        React.createElement("h1", { style: headingStyle }, title),
        children && React.createElement("div", { className: "btn-list" }, children)));
};
PageHeading.defaultProps = {
    title: '',
};
export default PageHeader;
//# sourceMappingURL=page-header.js.map