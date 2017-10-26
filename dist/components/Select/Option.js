import * as React from 'react';
export const Option = ({ children: label, value }) => {
    if (!label && !value) {
        return React.createElement("option", null);
    }
    return React.createElement("option", { value: value || label }, label);
};
export default Option;
//# sourceMappingURL=Option.js.map