var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import Styles from './styles/meter.module.scss';
import cn from './utilities/classnames';
const uploadProgressStyle = {
    alignItems: 'center',
    border: '1px solid #e9ecef',
    borderRadius: '2px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    justifyContent: 'center',
    padding: '60px 30px',
};
export const UploadProgress = (_a) => {
    var { children, className, percent } = _a, attributes = __rest(_a, ["children", "className", "percent"]);
    if (percent < 0 || percent > 100) {
        throw new Error(`Percent must be between 0 and 100. You provided ${percent}.`);
    }
    return (React.createElement("section", { className: `upload-progress ${className}`, style: uploadProgressStyle },
        children,
        React.createElement("div", { className: cn('meter-bar', Styles['meter-bar']) },
            React.createElement("div", { className: cn('meter-bar-fill', Styles['meter-bar-fill']), style: {
                    backgroundColor: '#1A82e2',
                    width: `${percent}%`,
                } }))));
};
UploadProgress.defaultProps = {};
export default UploadProgress;
//# sourceMappingURL=upload-progress.js.map