// @flow
import React from 'react';
import cn from 'classnames';

export const BadgeNames = {
  'sg-blue': null,
  slate: null,
  'ron-burgundy': null,
  'burnt-orange': null,
  carrot: null,
  mango: null,
  mantis: null,
  spruce: null,
  'grass-stain': null,
  lime: null,
  cobalt: null,
  bluebird: null,
  seafoam: null,
  caribbean: null,
  crown: null,
  screample: null,
  sangria: null,
  lavender: null,
  'wild-strawberry': null,
  steel: null,
};

type BadgeTypes = {
  children: ?React.Element<*>,
  badgeName: $Keys<typeof BadgeNames>,
};

const Badge = ({ children, badgeName }: BadgeTypes) => (
  <span className={cn('badge', badgeName)}>{children}</span>
);

export default Badge;

// "postinstall": "cd style-guide && npm install && cd ..",
