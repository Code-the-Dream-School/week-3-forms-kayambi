
//Validate date 


// Validating Phone number with Regex ;

function validate(phone) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // console.log(regex.test(phone))
  }

  document.getElementById("phone").innerHTML = phone;

  
  validate('12345678903')     // true
  validate(1234567890)       // true
  validate('(078)789-8908')  // true
  validate('123-345-3456')   // true


// Creating option for people
let options;
// let myselect =document.getElementById('Number');

for(let i =1 ; i < 21 ;i +=1 ){

    if(i===1) {

    option= `<option value=${i}>${i} Person</option>`;  

    }else {

    option = `<option value=${i}>${i} People</option>`;

    }    
    options += option;
}

document.getElementById("Number").innerHTML = options


//Time Differences 
reservationOption('10:AM','12:AM');
//To create schedule options
function reservationOption(openTime, closeTime) {
  const numOfTimeDifferences = getTimeDifferences(openTime, closeTime);
  const openTimeArray = openTime.split(':');
  let hour = parseInt(openTimeArray[0]);
  let time = "AM";
  let half_hour = openTimeArray[1].includes('30') ? "30": "00";
  for (let i = 0; i <= numOfTimeDifferences; i++) {
    if (hour === 12 && time === "AM") {
      time = "PM"
    } else if (hour === 13) {
      hour = 1;
    } else if (i === 28) {
      time = "AM";
    }
    let option = document.createElement("option");
    option.textContent = `${hour}:${half_hour} ${time}`;
    document.querySelector("#timeNum").appendChild(option);
    hour = half_hour === "00" ? hour : hour + 1;
    half_hour = half_hour === "00" ? "30" : "00";
  }  
}
// times will take time from 10:30 AM 10:00 PM the time from 10:30 to 00:00 AM
function getTimeDifferences(startTime, endTime) {
  const startTimNum = convertTimeStringToNumber(startTime);
  const endTimeNum = convertTimeStringToNumber(endTime);
  const reservationDifferencInTime = (endTimeNum - startTimNum) * 2;
  return reservationDifferencInTime;
}
// Converting string to numbers
function convertTimeStringToNumber(moment) {
  const myTimeAM = moment.includes('AM');
  const middNightTime = moment.includes('12');
  const timediffSplit = moment.split(':');
  let getnumericTime;
  if (timediffSplit[1].includes('30')) {
    getnumericTime = parseInt(timediffSplit[0]) + 0.5;
    if (weAdd12Hours(myTimeAM, middNightTime)) {
      getnumericTime += 12;
    }
  } else {
     getnumericTime = parseInt(timediffSplit[0]);
     if (weAdd12Hours(myTimeAM, middNightTime)) {
      getnumericTime += 12;
     }
  }
  return getnumericTime;
}
function weAdd12Hours(myTimeAM, middNightTime) {
  if (myTimeAM) {
    if (middNightTime) {
      return true;
    }
  } else { // PM
    if (!middNightTime) {
      return true;
    }
  }
  return false;
}

// (function(){

//     var d = new Date();
//         return d 
// }());

//  I  haven't figured out to work make time work . 








