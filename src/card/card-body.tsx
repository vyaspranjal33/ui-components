import React from 'react';

export interface CardBody {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardBody: React.SFC<CardBody> = ({
  children,
  className = '',
  style,
  ...attributes
}) => {
  return (
    <p className={className} {...attributes} style={style}>
      {children}
    </p>
  );
};
export default CardBody;
