import React from 'react';
import Alert from './alert';
import {
  Button,
  Buttonized,
} from './button';
import Icon from './icon';
import { Statistic, Statistics } from './statistics';
import cn from './utilities/classnames';
import findActiveIndex from './utilities/find-active-index';
interface EmailCardSendTimeProps {
  value?: string;
  renderSendTimeLink?: (value: string) => any;
  alert?: any;
}

const EmailCardSendTime: React.SFC<EmailCardSendTimeProps> = ({ value, renderSendTimeLink, alert = '' }) => {
  return (
    <div className={cn('email-card-send-time', { 'has-value': !!value })}>
      <Buttonized type="secondary">
          {renderSendTimeLink && renderSendTimeLink(value)}
      </Buttonized>
      {alert}
    </div>);
};

export interface EmailCardDetail {
  label: string;
  value: string;
  renderEditDetailLink?: (value: string) => any;
}

const EmailCardDetails: React.SFC<{ details?: EmailCardDetail[] }> = ({ details }) => {
  const rows = details && details.map((detail) => {
    return (
      <tr key={detail.label}>
        <td className="label">{detail.label}</td>
        <td>{detail.renderEditDetailLink && detail.renderEditDetailLink(detail.value) || detail.value}</td>
      </tr>
    );
  });

  return (
    <div className="email-card-details">
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export interface EmailCardContentProps {
  thumbnailUrl: string;
  onContentEditClick: (event: any) => void;
}

const EmailCardContent: React.SFC<EmailCardContentProps> = ({ thumbnailUrl, onContentEditClick }) => (
  <div className="email-card-content">
    {
      thumbnailUrl ?
        <a href="#">
          <img src={thumbnailUrl} onClick={onContentEditClick} />
          <span className="email-card-content-edit">
            <Icon type="pencil" />
            Edit
          </span>
        </a>
      :
        <Button type="secondary" onClick={onContentEditClick}>
          Add Email Content
        </Button>
    }
  </div>
);

export interface EmailCardAddButtonProps {
  onClick: (event: any) => void;
}

export const EmailCardAddButton: React.SFC<EmailCardAddButtonProps> = ({ onClick }) => {
  return (
    <div className="btn-list email-card-add">
      <Button type="secondary" onClick={onClick}>
        Add an Email
      </Button>
    </div>
  );
};

export interface EmailCardProps {
  details?: EmailCardDetail[];
  editing?: boolean;
  editable?: boolean;
  live?: boolean;
  n: number;
  onContentEditClick?: (event: any) => void;
  onSaveAlertClick?: (event: any) => void;
  paused?: boolean;
  renderSendTimeLink?: (value: string) => any;
  renderAlert?: () => any;
  sendTimeValue?: string;
  statistics?: Statistic[];
  thumbnailUrl?: string;
}

export class EmailCard extends React.Component<EmailCardProps> {
  public static defaultProps = {
    editable: false,
    editing: false,
    live: false,
    paused: false,
    renderAlert: false,
  };

  public render() {
    const alertEl = this.props.renderAlert && this.props.renderAlert();
    return (
      <div
        className={cn('email-card-wrap', {
          'has-alert': !!this.props.renderAlert,
          'is-editable': this.props.editable,
          'is-live': this.props.live,
          'is-paused': this.props.paused,
        })}
      >
        <EmailCardSendTime
          value={this.props.sendTimeValue}
          renderSendTimeLink={this.props.renderSendTimeLink}
          alert={alertEl}
        />
        <Statistics statsClassName="email-stats" statistics={this.props.statistics}/>
        <div className="email-card">
          <div className="email-card-count">
            <p>Email {this.props.n}</p>
          </div>
          <EmailCardContent thumbnailUrl={this.props.thumbnailUrl} onContentEditClick={this.props.onContentEditClick} />
          <EmailCardDetails details={this.props.details}/>
        </div>
        {alertEl}
      </div>
    );
  }
}

export default EmailCard;
