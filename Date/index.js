const date = new Date("2012-08-02T12:34:54Z");

console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

const dayOfWeek = date.getDay();
console.log(dayOfWeek);

const date1 = new Date("2023-08-02T12:34:54Z");
const date2 = new Date("2024-08-02T12:34:54Z");

if (date1 > date2) {
    console.log("date1 is greater than date2");
} else if (date1 < date2) {
    console.log("date1 is less than date2");
}