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
import React from 'react';
import { Button, Buttonized, } from './Button';
import Icon from './Icon';
import { Statistics } from './Statistics';
import cn from './utilities/classnames';
var EmailCardSendTime = function (_a) {
    var value = _a.value, renderSendTimeLink = _a.renderSendTimeLink, _b = _a.alert, alert = _b === void 0 ? '' : _b;
    return (React.createElement("div", { className: cn('email-card-send-time', { 'has-value': !!value }) },
        React.createElement(Buttonized, { type: "secondary" }, renderSendTimeLink && renderSendTimeLink(value)),
        alert));
};
var EmailCardDetails = function (_a) {
    var details = _a.details;
    var rows = details && details.map(function (detail) {
        return (React.createElement("tr", { key: detail.label },
            React.createElement("td", { className: "label" }, detail.label),
            React.createElement("td", null, detail.renderEditDetailLink && detail.renderEditDetailLink(detail.value) || detail.value)));
    });
    return (React.createElement("div", { className: "email-card-details" },
        React.createElement("table", null,
            React.createElement("tbody", null, rows))));
};
var EmailCardContent = function (_a) {
    var thumbnailUrl = _a.thumbnailUrl, onContentEditClick = _a.onContentEditClick;
    return (React.createElement("div", { className: "email-card-content" }, thumbnailUrl ?
        React.createElement("a", { href: "#" },
            React.createElement("img", { src: thumbnailUrl, onClick: onContentEditClick }),
            React.createElement("span", { className: "email-card-content-edit" },
                React.createElement(Icon, { type: "pencil" }),
                "Edit"))
        :
            React.createElement(Button, { type: "secondary", onClick: onContentEditClick }, "Add Email Content")));
};
export var EmailCardAddButton = function (_a) {
    var onClick = _a.onClick;
    return (React.createElement("div", { className: "btn-list email-card-add" },
        React.createElement(Button, { type: "secondary", onClick: onClick }, "Add an Email")));
};
var EmailCard = /** @class */ (function (_super) {
    __extends(EmailCard, _super);
    function EmailCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailCard.prototype.render = function () {
        var alertEl = this.props.renderAlert && this.props.renderAlert();
        return (React.createElement("div", { className: cn('email-card-wrap', {
                'has-alert': !!this.props.renderAlert,
                'is-editable': this.props.editable,
                'is-live': this.props.live,
                'is-paused': this.props.paused,
            }) },
            React.createElement(EmailCardSendTime, { value: this.props.sendTimeValue, renderSendTimeLink: this.props.renderSendTimeLink, alert: alertEl }),
            React.createElement(Statistics, { statsClassName: "email-stats", statistics: this.props.statistics }),
            React.createElement("div", { className: "email-card" },
                React.createElement("div", { className: "email-card-count" },
                    React.createElement("p", null,
                        "Email ",
                        this.props.n)),
                React.createElement(EmailCardContent, { thumbnailUrl: this.props.thumbnailUrl, onContentEditClick: this.props.onContentEditClick }),
                React.createElement(EmailCardDetails, { details: this.props.details })),
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