

let showMilitaryTime = function() {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  return time;

} 
showMilitaryTime();

// conversion to standard time
let showStandardTime = function() {
  let militaryTime = showMilitaryTime();
  let militaryArray = militaryTime.split(":");
  let militaryHour = parseInt(militaryArray[0]);
  militaryHour = militaryHour - 12;
  let standardTime = militaryHour + ":" + militaryArray[1];
  return standardTime;
}
showStandardTime();


document.querySelector("#timeDisplay").innerHTML = "The military time is now " + showMilitaryTime();

document.querySelector("#standardTimeDisplay").innerHTML = "The standard time is now " + showStandardTime();