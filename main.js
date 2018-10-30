function switchDay(num) {
  let out = ''
  switch (num) {
    case 0:
      out = "Sunday"
      break;
    case 1:
      out = "Monday"
      break;
    case 2:
      out = "Tuesday"
      break;
    case 3:
      out = "Wednesday"
      break;
    case 4:
      out = "Thursday"
      break;
    case 5:
      out = "Friday"
      break;
    case 6:
      out = "Saturday"
      break;

  }
  return out
}