//practice
function switchDay(num) {
  let out = ''
  switch (num) {
    case 0:
      out = 'Sunday'
      break;
    case 1:
      out = 'Monday'
      break;
    case 2:
      out = 'Tuesday'
      break;
    case 3:
      out = 'Wednesday'
      break;
    case 4:
      out = 'Thursday'
      break;
    case 5:
      out = 'Friday'
      break;
    case 6:
      out = 'Saturday'
      break;

  }
  return out
}
let result = switchDay(4)

console.log(result)

//1. Write a function that takes 2 parameters and displays the larger
function largerNumber(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    if (num2 > num1) {
      return num2
    }
  }
}
let results = largerNumber

console.log('hello')

//2. Write a function that will take in a number (1-100) return the letter grade for the student score

function grade(score) {
  let out = "";
  if (score >= 90) {
    out = "A"
  }
  else if (score >= 80 && score < 90) {
    out = "B"
  }
  else if (score >= 70 && score < 80) {
    out = "C"
  }
  return out;
}

console.log(grade(87));


//3. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (over 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function fever(temp) {
  let out = "fever";
  if (temp > 103) {
    out += " go to hospital"
  } else {
    out = "no " + out
  }
  return out;
}
console.log(fever(104))

//4. Write a function that takes in a car object, if it is not moving then return true
let mycar = {
  make: "Ford",
  model: "Mustang",
  color: "Red",
  moving: false
}

function isStopped(car) {
  // if (car.moving) {
  //   return false
  // }
  // return true
  return !car.moving
}
console.log("isStopped: ", isStopped(mycar))

//5. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let myDish = {
  yourDish: true,
  isDirty: true
}

function washDish(dish) {
  if (dish.isDirty && dish.yourDish) {
    return true
  }
  return false
}

console.log(washDish(myDish))

//6. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
  from: 'BOI',
  to: 'LAX',
  prices: {
    standard: 500,
    firstClass: 2200
  }
}, {
  from: 'BOI',
  to: 'SEA',
  prices: {
    standard: 800,
    firstClass: 1200
  }
}, {
  from: 'BOI',
  to: 'CAN',
  prices: {
    standard: 750,
    firstClass: 6200
  }
}]


function flightCost(destination, firstClass) {
  //***hint: use the find method***
  let result = flights.find(flight => flight.to == destination)

  if (firstClass) {
    return result.prices.firstClass
  } else {
    return result.prices.standard
  }
}

// 7. Given a number 1-7 return the corresponding day of the week.
// allow a secondary argument to change the first day of the week to monday

function getDayOfWeek(n, offsetForMon) {
  let days = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat']
  n = n - 1
  if (!offsetForMon) {
    return days[n]
  }
  let sun = days.shift()
  days.push(sun)
  return days[n]
}

getDayOfWeek(2, true)

//more practice


//1. Write a function that returns true if the number is even (remember modulus)
function isEven(num) {
  if (num % 2 == 0) {
    return true
  }
  return false
}

//2. Write a function that will determine if a car is speeding given the arguments for carSpeed and speedLimit, return a string if it is 'under the speed limit', 'at the speed limit', or 'over the speed limit'.
let cars = {
  carSpeed: '70',
  speedLimit: '60'
}

function car(speed) {
  if (speed.speedLimit > 60) {
    return "over the speed limit"
  }
  else if (speed.speedLimit < 60) {
    return "under the speed limit"
  }
  else if (speed.speedLimit = 60) {
    return "at speed limit"
  }
}
console.log(car(cars))


//3. Write a function that given a bird will return true if it is flightless: 
let bird = {
  name: "penguin",
  wings: true,
  canFly: false
}
function birdy(flight) {
  if (flight.canFly) {
    return false
  }
  return true
}
console.log(birdy(bird))

//4. Write a function that will determine if a user has a premium account and isSubscribed, return true if both are true.

let user = {
  premium: true,
  isSubscribed: false
}
function person(account) {
  return account.premium && account.isSubscribed
}
console.log(person(user))

//5. Write a function that given a number of weeks it will return how many days they contain, have it take in a second parameter that will be true if it only counts buisness days.

function daysFromWeeks(weeksNum, buisnessOnly) {
  if (buisnessOnly) {
    return weeksNum * 5
  }
  return weeksNum * 7
}
