var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
import { Button, Buttonized, } from './button';
import Icon from './icon';
import { Statistics } from './statistics';
import cn from './utilities/classnames';
var EmailCardSendTime = function (_a) {
    var value = _a.value, renderSendTimeLink = _a.renderSendTimeLink, _b = _a.alert, alert = _b === void 0 ? '' : _b, className = _a.className, attributes = __rest(_a, ["value", "renderSendTimeLink", "alert", "className"]);
    return (React.createElement("div", __assign({ className: cn('email-card-send-time', className, { 'has-value': !!value }) }, attributes),
        React.createElement(Buttonized, { type: "secondary" }, renderSendTimeLink && renderSendTimeLink(value)),
        alert));
};
var EmailCardDetails = function (_a) {
    var details = _a.details, className = _a.className, attributes = __rest(_a, ["details", "className"]);
    var rows = details && details.map(function (detail) {
        return (React.createElement("tr", { key: detail.label },
            React.createElement("td", { className: "label" }, detail.label),
            React.createElement("td", null, detail.renderEditDetailLink && detail.renderEditDetailLink(detail.value) || detail.value)));
    });
    return (React.createElement("div", __assign({ className: cn('email-card-details', className) }, attributes),
        React.createElement("table", null,
            React.createElement("tbody", null, rows))));
};
var EmailCardContent = function (_a) {
    var thumbnailUrl = _a.thumbnailUrl, onContentEditClick = _a.onContentEditClick, className = _a.className, attributes = __rest(_a, ["thumbnailUrl", "onContentEditClick", "className"]);
    return (React.createElement("div", __assign({ className: cn('email-card-content', className) }, attributes), thumbnailUrl ?
        React.createElement("a", { href: "#" },
            React.createElement("img", { src: thumbnailUrl, onClick: onContentEditClick }),
            React.createElement("span", { className: "email-card-content-edit" },
                React.createElement(Icon, { type: "pencil" }),
                "Edit"))
        :
            React.createElement(Button, { type: "secondary", onClick: onContentEditClick }, "Add Email Content")));
};
export var EmailCardAddButton = function (_a) {
    var onClick = _a.onClick, className = _a.className, attributes = __rest(_a, ["onClick", "className"]);
    return (React.createElement("div", __assign({ className: cn('btn-list', 'email-card-add', className) }, attributes),
        React.createElement(Button, { type: "secondary", onClick: onClick }, "Add an Email")));
};
var EmailCard = /** @class */ (function (_super) {
    __extends(EmailCard, _super);
    function EmailCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailCard.prototype.render = function () {
        var _a = this.props, details = _a.details, editing = _a.editing, editable = _a.editable, n = _a.n, onContentEditClick = _a.onContentEditClick, onSaveAlertClick = _a.onSaveAlertClick, paused = _a.paused, renderSendTimeLink = _a.renderSendTimeLink, renderAlert = _a.renderAlert, sendTimeValue = _a.sendTimeValue, statistics = _a.statistics, thumbnailUrl = _a.thumbnailUrl, live = _a.live, className = _a.className, attributes = __rest(_a, ["details", "editing", "editable", "n", "onContentEditClick", "onSaveAlertClick", "paused", "renderSendTimeLink", "renderAlert", "sendTimeValue", "statistics", "thumbnailUrl", "live", "className"]);
        var alertEl = renderAlert && renderAlert();
        return (React.createElement("div", __assign({ className: cn('email-card-wrap', className, {
                'has-alert': !!renderAlert,
                'is-editable': editable,
                'is-live': live,
                'is-paused': paused,
            }) }, attributes),
            React.createElement(EmailCardSendTime, { value: sendTimeValue, renderSendTimeLink: renderSendTimeLink, alert: alertEl }),
            React.createElement(Statistics, { statsClassName: "email-stats", statistics: statistics }),
            React.createElement("div", { className: "email-card" },
                React.createElement("div", { className: "email-card-count" },
                    React.createElement("p", null,
                        "Email ",
                        n)),
                React.createElement(EmailCardContent, { thumbnailUrl: thumbnailUrl, onContentEditClick: onContentEditClick }),
                React.createElement(EmailCardDetails, { details: details })),
            alertEl));
    };
    EmailCard.defaultProps = {
        editable: false,
        editing: false,
        live: false,
        paused: false,
        renderAlert: false,
    };
    return EmailCard;
}(React.Component));
export { EmailCard };
export default EmailCard;
//# sourceMappingURL=email-card.js.map