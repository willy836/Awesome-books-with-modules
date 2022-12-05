import { DateTime } from './luxon.js';

const dateContainer = document.querySelector('.date');
export const date = DateTime.now();
export const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};
const dateStr = date.toLocaleString('en-US', options);
dateContainer.innerHTML = dateStr;
