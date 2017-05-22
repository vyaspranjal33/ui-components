// @flow
import React from 'react';

// How I grabbed the icons from style-guide
// var thing = $('.style-guide-example .sg-icon').toArray().map((ele) => ($(ele.classList).toArray().reduce((acc, val)=>( val != 'sg-icon' ? val : ''))))

export const icons = {
  'airplane-fill': 'sg-icon-airplane',
  airplane: 'sg-icon-airplane-fill',
  'align-center': 'sg-icon-align-center',
  'align-left': 'sg-icon-align-left',
  'align-right': 'sg-icon-align-right',
  analytics: 'sg-icon-analytics',
  builder: 'sg-icon-builder',
  button: 'sg-icon-button',
  calendar: 'sg-icon-calendar',
  caret: 'sg-icon-caret',
  check: 'sg-icon-check',
  'check-circle': 'sg-icon-check-circle',
  'check-circle-fill': 'sg-icon-check-circle-fill',
  'clean-ui': 'sg-icon-clean-ui',
  clock: 'sg-icon-clock',
  code: 'sg-icon-code',
  columns: 'sg-icon-columns',
  contacts: 'sg-icon-contacts',
  // Doesn't seem to work
  'contacts-alt': 'sg-icon-contacts-alt',
  copy: 'sg-icon-copy',
  create: 'sg-icon-create',
  // Doesn't seem to work
  csv: 'sg-icon-csv',
  'desktop-view': 'sg-icon-desktop-view',
  divider: 'sg-icon-divider',
  drag: 'sg-icon-drag',
  gear: 'sg-icon-gear',
  image: 'sg-icon-image',
  images: 'sg-icon-images',
  'image-text': 'sg-icon-image-text',
  'info-circle': 'sg-icon-info-circle',
  key: 'sg-icon-key',
  // Doesn't seem to work
  list: 'sg-icon-list',
  locked: 'sg-icon-locked',
  mail: 'sg-icon-mail',
  'mobile-view': 'sg-icon-mobile-view',
  pencil: 'sg-icon-pencil',
  people: 'sg-icon-people',
  'pie-chart': 'sg-icon-pie-chart',
  plus: 'sg-icon-plus',
  reload: 'sg-icon-reload',
  'save-draft': 'sg-icon-save-draft',
  search: 'sg-icon-search',
  segment: 'sg-icon-segment',
  social: 'sg-icon-social',
  'sort-asc': 'sg-icon-sort-asc',
  'sort-desc': 'sg-icon-sort-desc',
  spacer: 'sg-icon-spacer',
  teammate: 'sg-icon-teammate',
  text: 'sg-icon-text',
  'text-only': 'sg-icon-text-only',
  trash: 'sg-icon-trash',
  unlocked: 'sg-icon-unlocked',
  'user-security': 'sg-icon-user-security',
  view: 'sg-icon-view',
  warning: 'sg-icon-warning',
  'warning-triangle': 'sg-icon-warning-triangle',
  x: 'sg-icon-x',
  'x-legacy': 'sg-icon-x-legacy',
};

const sizes = {
  small: 'is-size-20',
  medium: 'is-size-30',
  large: 'is-size-40',
  xlarge: 'is-size-60',
};
export type IconsType = $Keys<typeof icons>;
export type sizeType = $Keys<typeof sizes>;

const Icon = ({
  type,
  size,
}: {
  type: IconsType,
  size: sizeType,
}) => <i className={`sg-icon ${icons[type]} ${sizes[size]}`} />;

Icon.defaultProps = {
  size: 'small',
};
export default Icon;
