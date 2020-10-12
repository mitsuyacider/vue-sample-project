/**
 * NOTE: Convert date format
 * @param {Date} date target date
 * @param {String} by connect date string by this property
 */
export const formatDate = (date, by = "/") => {
  const d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join(by);
};

/**
 * NOTE: Convert string so that it starts with capital case.
 * @param {String} str
 */
export const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
