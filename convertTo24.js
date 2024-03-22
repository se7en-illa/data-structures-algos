function timeConversion(s) {
  let hours = parseInt(s.substring(0, 2));
  let minutesSeconds = s.substring(2, 8);
  let amPm = s.substring(8);

  if (amPm === "AM" && hours === 12) {
    hours = 0;
  } else if (amPm === "PM" && hours < 12) {
    hours += 12;
  }

  // Format hours to be two digits
  let formattedHours = hours < 10 ? "0" + hours : hours;

  return formattedHours + minutesSeconds;
}
