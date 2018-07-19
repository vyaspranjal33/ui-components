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
import { Button, Buttonized } from './button';
import Icon from './icon';
import { EmailCardStat, Statistics } from './statistics';
import BtnStyles from './styles/button.module.scss';
import Styles from './styles/email-card.module.scss';
import cn from './utilities/classnames';
const EmailCardSendTime = (_a) => {
    var { value, renderSendTimeLink, alert = '', className } = _a, attributes = __rest(_a, ["value", "renderSendTimeLink", "alert", "className"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['email-card-send-time'], { [Styles['has-value']]: !!value }, className) }, attributes),
        React.createElement(Buttonized, { type: "secondary", className: Styles.btn }, renderSendTimeLink && renderSendTimeLink(value)),
        alert));
};
const EmailCardDetails = (_a) => {
    var { details, className } = _a, attributes = __rest(_a, ["details", "className"]);
    const rows = details &&
        details.map(detail => {
            return (React.createElement("tr", { key: detail.label },
                React.createElement("td", { className: Styles.label }, detail.label),
                React.createElement("td", null, (detail.renderEditDetailLink &&
                    detail.renderEditDetailLink(detail.value)) ||
                    detail.value)));
        });
    return (React.createElement("div", { className: Styles['email-card-details'] },
        React.createElement("table", null,
            React.createElement("tbody", null, rows))));
};
const EmailCardContent = (_a) => {
    var { thumbnailUrl, onContentEditClick, className } = _a, attributes = __rest(_a, ["thumbnailUrl", "onContentEditClick", "className"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['email-card-content'], className) }, attributes), thumbnailUrl ? (React.createElement("a", { href: "#" },
        React.createElement("img", { src: thumbnailUrl, onClick: onContentEditClick }),
        React.createElement("span", { className: Styles['email-card-content-edit'] },
            React.createElement(Icon, { type: "pencil" }),
            "Edit"))) : (React.createElement(Button, { type: "secondary", onClick: onContentEditClick }, "Add Email Content"))));
};
export const EmailCardAddButton = (_a) => {
    var { onClick, className } = _a, attributes = __rest(_a, ["onClick", "className"]);
    return (React.createElement("div", Object.assign({ className: cn(BtnStyles['btn-list'], Styles['email-card-add'], className) }, attributes),
        React.createElement(Button, { type: "secondary", onClick: onClick }, "Add an Email")));
};
export class EmailCard extends React.Component {
    render() {
        const _a = this.props, { className, details, editable, editing, live, n, onContentEditClick, onSaveAlertClick, paused, renderActions, renderAlert, renderSendTimeLink, sendTimeValue, statistics, thumbnailUrl } = _a, attributes = __rest(_a, ["className", "details", "editable", "editing", "live", "n", "onContentEditClick", "onSaveAlertClick", "paused", "renderActions", "renderAlert", "renderSendTimeLink", "sendTimeValue", "statistics", "thumbnailUrl"]);
        const alertEl = renderAlert && renderAlert();
        return (React.createElement("div", Object.assign({ className: cn(Styles['email-card-wrap'], className, {
                [Styles['has-alert']]: !!this.props.renderAlert,
                [Styles['is-editable']]: this.props.editable,
                [Styles['is-live']]: this.props.live,
                [Styles['is-paused']]: this.props.paused,
            }) }, attributes),
            React.createElement(EmailCardSendTime, { value: sendTimeValue, renderSendTimeLink: renderSendTimeLink, alert: alertEl }),
            statistics && (React.createElement(Statistics, { commonClass: "email-stats" },
                React.createElement(EmailCardStat, { specificClass: "", statistic: statistics.sent }),
                React.createElement(EmailCardStat, { specificClass: "delivered", statistic: statistics.delivered }),
                React.createElement(EmailCardStat, { specificClass: "unique-opens", statistic: statistics.opens }),
                React.createElement(EmailCardStat, { specificClass: "unique-clicks", statistic: statistics.clicks }),
                React.createElement(EmailCardStat, { specificClass: "unsubscribes", statistic: statistics.unsubscribes }))),
            React.createElement("div", { className: cn(Styles['email-card'], 'email-card') },
                React.createElement("div", { className: Styles['email-card-count'] },
                    React.createElement("p", null,
                        "Email ",
                        n)),
                React.createElement(EmailCardContent, { thumbnailUrl: thumbnailUrl, onContentEditClick: onContentEditClick }),
                React.createElement(EmailCardDetails, { details: details }),
                renderActions && renderActions()),
            alertEl));
    }
}
EmailCard.defaultProps = {
    editable: false,
    editing: false,
    live: false,
    paused: false,
    renderAlert: false,
};
export default EmailCard;
//# sourceMappingURL=email-card.js.map