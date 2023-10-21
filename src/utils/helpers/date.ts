import { Weekday } from "./../data/weekday";

export const dateToWeekday = (_date) => {
  if (!_date) return;

  const date = new Date(_date);
  const day = date.getDay();
  return `(${Weekday[day]})`;
};
