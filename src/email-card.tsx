import React from 'react';
import Alert from './alert';
import { Button, Buttonized } from './button';
import Icon from './icon';
import { EmailCardStat, Statistics, StatisticType } from './statistics';
import cn from './utilities/classnames';
import findActiveIndex from './utilities/find-active-index';
interface EmailCardSendTimeProps {
  value?: string;
  renderSendTimeLink?: (value: string) => any;
  alert?: any;
  className?: string;
}

const EmailCardSendTime: React.SFC<EmailCardSendTimeProps> = ({
  value,
  renderSendTimeLink,
  alert = '',
  className,
  ...attributes
}) => {
  return (
    <div
      className={cn('email-card-send-time', className, {
        'has-value': !!value,
      })}
      {...attributes}
    >
      <Buttonized type="secondary">
        {renderSendTimeLink && renderSendTimeLink(value)}
      </Buttonized>
      {alert}
    </div>
  );
};

export interface EmailCardDetail {
  label: string;
  value: string;
  renderEditDetailLink?: (value: string) => any;
}

const EmailCardDetails: React.SFC<{
  details?: EmailCardDetail[];
  className?: string;
}> = ({ details, className, ...attributes }) => {
  const rows =
    details &&
    details.map(detail => {
      return (
        <tr key={detail.label}>
          <td className="label">{detail.label}</td>
          <td>
            {(detail.renderEditDetailLink &&
              detail.renderEditDetailLink(detail.value)) ||
              detail.value}
          </td>
        </tr>
      );
    });

  return (
    <div className={cn('email-card-details', className)} {...attributes}>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export interface EmailCardContentProps {
  thumbnailUrl: string;
  onContentEditClick: (event: any) => void;
  className?: string;
}

const EmailCardContent: React.SFC<EmailCardContentProps> = ({
  thumbnailUrl,
  onContentEditClick,
  className,
  ...attributes
}) => (
  <div className={cn('email-card-content', className)} {...attributes}>
    {thumbnailUrl ? (
      <a href="#">
        <img src={thumbnailUrl} onClick={onContentEditClick} />
        <span className="email-card-content-edit">
          <Icon type="pencil" />
          Edit
        </span>
      </a>
    ) : (
      <Button type="secondary" onClick={onContentEditClick}>
        Add Email Content
      </Button>
    )}
  </div>
);

export interface EmailCardAddButtonProps {
  onClick: (event: any) => void;
  className?: string;
}

export const EmailCardAddButton: React.SFC<EmailCardAddButtonProps> = ({
  onClick,
  className,
  ...attributes
}) => {
  return (
    <div
      className={cn('btn-list', 'email-card-add', className)}
      {...attributes}
    >
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
  statistics?: {
    sent: StatisticType;
    delivered: StatisticType;
    opens: StatisticType;
    clicks: StatisticType;
    unsubscribes: StatisticType;
  };
  thumbnailUrl?: string;
  className?: string;
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
    const {
      details,
      editing,
      editable,
      n,
      onContentEditClick,
      onSaveAlertClick,
      paused,
      renderSendTimeLink,
      renderAlert,
      sendTimeValue,
      statistics,
      thumbnailUrl,
      live,
      className,
      ...attributes
    } = this.props;
    const alertEl = renderAlert && renderAlert();
    return (
      <div
        className={cn('email-card-wrap', className, {
          'has-alert': !!renderAlert,
          'is-editable': editable,
          'is-live': live,
          'is-paused': paused,
        })}
        {...attributes}
      >
        <EmailCardSendTime
          value={sendTimeValue}
          renderSendTimeLink={renderSendTimeLink}
          alert={alertEl}
        />
        {statistics && (
          <Statistics commonClass="email-stats">
            <EmailCardStat specificClass="" statistic={statistics.sent} />
            <EmailCardStat
              specificClass="delivered"
              statistic={statistics.delivered}
            />
            <EmailCardStat
              specificClass="unique-opens"
              statistic={statistics.opens}
            />
            <EmailCardStat
              specificClass="unique-clicks"
              statistic={statistics.clicks}
            />
            <EmailCardStat
              specificClass="unsubscribes"
              statistic={statistics.unsubscribes}
            />
          </Statistics>
        )}
        <div className="email-card">
          <div className="email-card-count">
            <p>Email {n}</p>
          </div>
          <EmailCardContent
            thumbnailUrl={thumbnailUrl}
            onContentEditClick={onContentEditClick}
          />
          <EmailCardDetails details={details} />
        </div>
        {alertEl}
      </div>
    );
  }
}

export default EmailCard;
