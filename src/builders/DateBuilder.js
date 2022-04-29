export const dateBuilder = (record) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[record.getDay()];
  let date = record.getDate();
  let month = months[record.getMonth()];
  let year = record.getFullYear();

  return `${day} ${date} ${month} ${year}`
}
