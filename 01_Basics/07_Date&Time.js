const time1 = new Date()
// console.log(time1.toString());
// console.log(time1.toDateString());
// console.log(time1.toLocaleString());
// console.log(typeof time1);

let date1 = new Date(2023, 9 , 30)
let date2 = new Date(2023, 3 , 30)
let date3 = new Date("2023","8","12")
let date4 = new Date("2023","01","12")
// console.log((date1 + date2 + date3 + date4).toLocaleString());
// console.log(date2.toLocaleString());

const mystampTime = Date.now()
// console.log(mystampTime);
// console.log(mystampTime.toLocaleString());
// console.log(date1.getDate());
// console.log(date1.getHours());
// console.log(date1.getMinutes());
// console.log(date1.getSeconds());
// console.log(date1.getDay());
// console.log(date1.getMonth() + 1);
// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.round(Date.now()/100));
// console.log(Math.floor(Date.now()/100));

// `${date1.getDate()} and time is`

console.log(date1.toLocaleString('default', {
    weekday: "long",
    month: "2-digit",
}));



const datenew = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat('en-US').format(datenew));
// The Intl.DateTimeFormat object enables language-sensitive date and time formatting.
// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(datenew));
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(
  new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Australia/Sydney',
  }).format(datenew),
);
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"





const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)














