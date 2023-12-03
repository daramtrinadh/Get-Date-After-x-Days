const addDays = require("date-fns/addDays");
const calculateDate = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
const days = 5;
const result = calculateDate(days);
console.log(result);
module.exports = calculateDate;
