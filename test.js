

// Creating option for people
let options ='';
let myselect =document.getElementById('Number');

for(let i =1 ; i < 21 ;i +=1 ){

    if(i===1) {

    option= `<option value=${i}>${i} Person</option>`;  

    }else {

    option = `<option value=${i}>${i} People</option>`;

    }    
    options += option;
}
// console.log(myselect.innerHTML= options);
myselect.innerHTML= options 




// create time tracker 

// times will look like 10:30 AM 10:00 PM 10.5 to 22

function getNumberOfTimeSlots(openTime, closeTime) {
    const openTimeNumeric = convertTimeStringToNumber(openTime);
    const closeTimeNumeric = convertTimeStringToNumber(closeTime);
    const reservationSlots = (closeTimeNumeric - openTimeNumeric) * 2;
    return reservationSlots;
  }
  function convertTimeStringToNumber(time) {
    const isTimeAM = time.includes('AM');
    const isTimeTwelve = time.includes('12');
    const timeSplit = time.split(':');
    let timeNumeric;
    if (timeSplit[1].includes('30')) {
      timeNumeric = parseInt(timeSplit[0]) + 0.5;
      if (shouldAdd12Hours(isTimeAM, isTimeTwelve)) {
        timeNumeric += 12;
      }
    } else {
       timeNumeric = parseInt(timeSplit[0]);
       if (shouldAdd12Hours(isTimeAM, isTimeTwelve)) {
        timeNumeric += 12;
       }
    }
    return timeNumeric;
  }
  function shouldAdd12Hours(isTimeAM, isTimeTwelve) {
    if (isTimeAM) {
      if (isTimeTwelve) {
        return true;
      }
    } else { // PM
      if (!isTimeTwelve) {
        return true;
      }
    }
    return false;
  }
//   console.log(shouldAdd12Hours.innerHTML = option);





      



















  




