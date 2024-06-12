import { DateTime } from "luxon";

export const prettifyDate = (jsDate) => {
  const date = new Date(jsDate);
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_MED);
};
