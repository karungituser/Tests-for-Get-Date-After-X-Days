const addDays = require("date-fns/addDays");

const getDaysAfterXDays = (days) => {
  let newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
module.exports = getDaysAfterXDays;
console.log(getDaysAfterXDays(4));
