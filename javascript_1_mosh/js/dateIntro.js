const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9); // 4 is May, 0 is January

console.log(now, date1, date2);

console.log(now.toDateString());
console.log(now.toISOString()); // ISO standard date format
