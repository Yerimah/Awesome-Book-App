import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const now = DateTime.now();
const today = now.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export { now, today };