//write program that will register runners for the race
let raceNumber = Math.floor(Math.random() * 1000)
// console.log(raceNumber)

//adult runner over 18y/o
//youth runner under 18y/o
//both of them can register early or late

//Create a var that indicates whether a runner registered early or not.
let regEarly = true
let regAge = 16 //youth runner

//if statement for check age and earlyregister
if (regAge < 18 && regEarly) {
  raceNumber += 1000
  //console.log(raceNumber)
}

//if statement to check age and regTime
if (regAge > 18 && regEarly) {
  console.log(
    `The race will start at 9.30 a.m. and this is your raceNumber ${raceNumber}`
  )
} else if (regAge > 18 && !regEarly) {
  console.log(
    `The race will start at 11.00 a.m. and this is your raceNumber ${raceNumber}`
  )
} else if (regAge < 18) {
  console.log(
    `The race will start at 12.30 p.m. and this is your raceNumber ${raceNumber}`
  )
} else {
  console.log(
    'For those who are not register yet, please go to the registration desk'
  )
}
