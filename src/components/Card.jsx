// @flow
import React from 'react';
import cx from 'classnames';
import type { ReactChildren } from 'react-flow-types';

export type CardProps = {
  small?: boolean,
  style?: Object,
  centered?: boolean,
  inline?: boolean,
  module?: boolean,
  children?: ReactChildren,
};

const Card = ({
  style,
  small,
  centered,
  inline,
  module: isModule,
  children,
}: CardProps) =>
  <div
    className={cx('card', {
      'is-thin': small,
      'is-centered': centered,
      'is-inline': inline,
      'is-module': isModule,
    })}
    style={{ ...style }}
  >
    {children}
  </div>;

Card.defaultProps = {
  centered: false,
  inline: false,
  module: false,
  small: false,
  style: {},
  children: <div />,
};

export default Card;
