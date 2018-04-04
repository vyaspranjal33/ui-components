import React from 'react';
import cn from '../utilities/classnames';
import findActiveIndex from '../utilities/find-active-index';
import Alert from './Alert';
import {
  Button,
  Buttonized,
} from './Button';
import Icon from './Icon';

interface EmailCardStatistic {
  label: string;
  amount: number;
  format: string;
}

const EmailCardStatistics: React.SFC<{ statisticData?: EmailCardStatistic[] }> = ({ statisticData }) => {
  // This uses numbers rather than formatted strings to prepare for locale specific number formatting
  const formatStatistic = (amount: number, format: string) => {
    if (format === 'number') {
      const parts = amount.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    } else {
      return (amount * 100).toFixed(2) + '%';
    }
  };

  const statisticsClassMap = ['', 'delivered', 'unique-opens', 'unique-clicks', 'unsubscribes'];
  const statisticsElements = statisticData && statisticData.map((stat, i) => {
    const value = formatStatistic(stat.amount, stat.format);
    const specificClass = statisticsClassMap[i] || '';
    return (
      <div className="email-stat" key={stat.label}>
        <p className={'stat ' + specificClass}>{value}</p>
        <p className="label">{stat.label}</p>
      </div>
    );
  });

  return statisticsElements &&
    (
      <div className="email-card-stats">
        {statisticsElements}
      </div>
    )
  || null;

};

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

interface EmailCardDetail {
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
  }) || [];

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

interface EmailCardContentProps {
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

interface EmailCardAddButtonProps {
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

interface EmailCardProps {
  details?: EmailCardDetail[];
  editing?: boolean;
  hasAlert?: boolean;
  editable?: boolean;
  live?: boolean;
  n: number;
  onContentEditClick?: (event: any) => void;
  paused?: boolean;
  renderSendTimeLink?: (value: string) => any;
  sendTimeValue?: string;
  statistics?: EmailCardStatistic[];
  thumbnailUrl?: string;
}

export class EmailCard extends React.Component<EmailCardProps> {
  public static defaultProps = {
    editable: false,
    editing: false,
    hasAlert: false,
    live: false,
    paused: false,
  };

  public render() {
    const saveAlert = this.props.hasAlert && this.renderAlert();
    return (
      <div
        className={cn('email-card-wrap', {
          'has-alert': this.props.hasAlert,
          'is-editable': this.props.editable,
          'is-live': this.props.live,
          'is-paused': this.props.paused,
        })}
      >
        <EmailCardSendTime
          value={this.props.sendTimeValue}
          renderSendTimeLink={this.props.renderSendTimeLink}
          alert={saveAlert}
        />
        <EmailCardStatistics statisticData={this.props.statistics}/>
        <div className="email-card">
          <div className="email-card-count">
            <p>Email {this.props.n}</p>
          </div>
          <EmailCardContent thumbnailUrl={this.props.thumbnailUrl} onContentEditClick={this.props.onContentEditClick} />
          <EmailCardDetails details={this.props.details}/>
        </div>
        {saveAlert}
      </div>
    );
  }
  // TODO: Add `dismissable` to remove X button after Chris's PR is merged
  private renderAlert() {
    return (
      <Alert type="warning" icon="info-circle">
        <p>
          Changes you've made to this email have not been applied to your live automation.
          <Button type="primary" small>
            Save and Apply
          </Button>
        </p>
      </Alert>
    );
  }
}

export default EmailCard;
